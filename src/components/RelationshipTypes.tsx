import { useState } from "react";
import { Menu, Segment, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { isEmpty } from "../utils";
import RelationshipGrid from "./RelationshipGrid";
import useSocial from "../hooks/useSocial";
import Button from "./Button";
import { postFakeRequest } from "../utils";
import * as yup from "yup";

export default function RelationshipTypes() {
  const { relationTypes, addRelationType, deleteRelationType } = useSocial();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const formik = useFormik({
    initialValues: {
      value: "",
      text: "",
    },
    onSubmit: (values, actions) => {
      postFakeRequest(values).then((data: any) => {
        addRelationType(data.value, data.text);
        actions.setSubmitting(false);
        toast.success("Successfully Added");
        actions.resetForm();
        setShowDetails(false);
      });
    },
    validationSchema: yup.object().shape({
      value: yup
        .string()
        .required("Required")
        .min(2, "More than 2 characters")
        .max(4, "Must not exceed 4 characters")
        .test("unique", (value = "", { path, createError }) => {
          const existing = relationTypes.map((r) => r.value);
          return (
            (Array.isArray(existing)
              ? !existing.includes(value)
              : existing !== value) ||
            createError({ path, message: "Already in use" })
          );
        }),
      text: yup
        .string()
        .required("Required")
        .min(2, "More than 2 characters")
        .max(10, "Must not exceed 10 characters"),
    }),
  });

  const onDeleteRelation = () => {
    try {
      deleteRelationType(selectedValues);
      setSelectedValues([]);
    } catch (err) {
      console.log(err);
      toast.error("Unable to delete");
    }
  };

  return (
    <>
      <Menu attached="top">
        <Menu.Item header>Relationship Types</Menu.Item>
      </Menu>
      <Segment attached="bottom">
        {!showDetails ? (
          <>
            <RelationshipGrid
              rows={relationTypes}
              minHeight={250}
              onSelectionChange={(selected) =>
                setSelectedValues(
                  typeof selected === "boolean"
                    ? relationTypes.map((r) => r.value)
                    : Object.keys(selected).map((s) => s)
                )
              }
            />
            <Button color="instagram" onClick={() => setShowDetails(true)}>
              Add
            </Button>
            <Button
              color="youtube"
              disabled={!selectedValues.length}
              onClick={() => onDeleteRelation()}
              content={"Select a relation type"}
            >
              Delete
            </Button>
          </>
        ) : (
          <Form onSubmit={formik.handleSubmit}>
            <Form.Input
              fluid
              label="Relation Name"
              name="text"
              value={formik.values.text}
              onChange={formik.handleChange}
              error={formik.errors.text}
              autoComplete="off"
            />

            <Form.Input
              fluid
              label="Code"
              name="value"
              value={formik.values.value}
              onChange={({ target: { name, value } }) =>
                formik.handleChange({
                  target: { name, value: value ? value.toUpperCase() : "" },
                })
              }
              error={formik.errors.value}
              autoComplete="off"
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
