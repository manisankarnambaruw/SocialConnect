import { useState, useEffect } from "react";
import { Menu, Segment, Form } from "semantic-ui-react";
import { postFakeRequest, isEmpty } from "../utils";
import PeopleGrid from "./PeopleGrid";
import { useFormik } from "formik";
import useSocial from "../hooks/useSocial";
import { useParams } from "react-router-dom";
import { IPeopleParams, IUserData } from "../interfaces";
import { toast } from "react-toastify";
import * as yup from "yup";
import Button from "./Button";

export default function Relations() {
  const { connections, relations, addRelation, relationTypes, deleteRelation } =
    useSocial();
  const { peopleId } = useParams<IPeopleParams>();
  const [rows, setRows] = useState<IUserData[]>([] as IUserData[]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const formik = useFormik({
    initialValues: {
      peopleId: peopleId,
      connectedPeopleId: "",
      relationType: "",
    },
    onSubmit: (values, actions) => {
      postFakeRequest(values).then((data: any) => {
        if (
          !relations.some(
            (r) =>
              r.peopleId === Number(peopleId) &&
              r.connectedPeopleId === Number(values.connectedPeopleId)
          )
        ) {
          addRelation({ ...data, peopleId: Number(peopleId) });
          actions.setSubmitting(false);
          toast.success("Successfully Added");
          actions.resetForm();
          setShowDetails(false);
        }
      });
    },
    validationSchema: yup.object().shape({
      connectedPeopleId: yup.number().required("Required"),
      relationType: yup.string().required("Required"),
    }),
  });

  const onDeleteRelation = () => {
    try {
      deleteRelation(selectedIds, Number(peopleId));
      setSelectedIds([]);
    } catch (err) {
      console.log(err);
      toast.error("Unable to delete");
    }
  };

  useEffect(() => {
    setRows(
      relations.reduce((acc, curr) => {
        const connect = connections.find(
          (c) =>
            (c.id === curr.connectedPeopleId &&
              curr.peopleId === Number(peopleId)) ||
            (Number(peopleId) === curr.connectedPeopleId &&
              c.id === curr.peopleId)
        );
        if (!!connect) acc.push(connect);
        return acc;
      }, [] as IUserData[])
    );
  }, [connections, peopleId, relations]);

  useEffect(() => {
    setSelectedIds([]);
  }, [peopleId, showDetails]);

  return (
    <>
      <Menu attached="top">
        <Menu.Item header>Relations</Menu.Item>
      </Menu>
      <Segment attached="bottom">
        {!showDetails ? (
          <>
            <PeopleGrid
              rows={rows}
              minHeight={350}
              onSelectionChange={(selected) =>
                setSelectedIds(
                  typeof selected === "boolean"
                    ? rows.map((r) => Number(r.id))
                    : Object.keys(selected).map((s) => Number(s))
                )
              }
            />
            <Button
              color="instagram"
              disabled={!(peopleId !== "new" && Number(peopleId))}
              onClick={() => setShowDetails(true)}
              content={"Create a Person"}
            >
              Add
            </Button>
            <Button
              color="youtube"
              disabled={
                !(peopleId !== "new" && Number(peopleId) && selectedIds.length)
              }
              onClick={() => onDeleteRelation()}
              content={
                !(peopleId !== "new" && Number(peopleId))
                  ? "Create a Person"
                  : "Select a relation"
              }
            >
              Delete
            </Button>
          </>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <Form.Dropdown
              fluid
              search
              selection
              label="Connection"
              name="connectedPeopleId"
              value={formik.values.connectedPeopleId}
              options={connections
                .filter(
                  (c) =>
                    !rows.map((r) => r.id).includes(c.id) &&
                    c.id !== Number(peopleId)
                )
                .map((c) => ({
                  value: c.id,
                  text: `${c.firstName} ${c.lastName}`,
                }))}
              onChange={(_, { name, value }) =>
                formik.handleChange({ target: { name, value } })
              }
              error={formik.errors.connectedPeopleId}
            />

            <Form.Dropdown
              fluid
              search
              selection
              label="Relationship"
              name="relationType"
              value={formik.values.relationType}
              options={relationTypes}
              onChange={(_, { name, value }) =>
                formik.handleChange({ target: { name, value } })
              }
              error={formik.errors.relationType}
            />

            <Button
              color="orange"
              type="button"
              onClick={() => {
                formik.resetForm();
                setShowDetails(false);
              }}
            >
              Back
            </Button>

            <Button
              color="green"
              type="submit"
              loading={formik.isSubmitting}
              disabled={formik.isSubmitting || !isEmpty(formik.errors)}
              disabledContent
            >
              Submit
            </Button>
          </Form>
        )}
      </Segment>
    </>
  );
}
