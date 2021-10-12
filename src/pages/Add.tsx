import { useEffect } from "react";
import { Form, Grid, Menu, Segment } from "semantic-ui-react";
import * as yup from "yup";
import { useFormik } from "formik";
import { isEmpty, postFakeRequest } from "../utils";
import useSocial from "../hooks/useSocial";
import { toast } from "react-toastify";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { IPeopleParams, IUserData } from "../interfaces";
import Relations from "../components/Relations";
import Button from "../components/Button";
import RelationshipTypes from "../components/RelationshipTypes";

export default function AddPeople() {
  const { addConnection, updateConnection, connections } = useSocial();
  const { peopleId } = useParams<IPeopleParams>();
  const history = useHistory();

  const { setValues, ...formik } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      id: Number(peopleId) || "new",
    },
    onSubmit: (values, actions) => {
      postFakeRequest(values).then((data: any) => {
        let connection = {} as IUserData;
        if (values.id === "new") {
          connection = addConnection(data);
          actions.setFieldValue("id", connection.id);
          actions.setSubmitting(false);
          history.push(`/add/${connection.id}`);
          toast.success("Successfully Added");
        } else {
          updateConnection(data);
          actions.setSubmitting(false);
          toast.success("Successfully Updated");
        }
      });
    },
    validationSchema: yup.object().shape({
      firstName: yup
        .string()
        .required("Required")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets"),
      lastName: yup
        .string()
        .required("Required")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets"),
    }),
  });

  useEffect(() => {
    if (!peopleId || peopleId === "undefined" || peopleId === "null")
      history.goBack();

    setValues(
      connections.find((c) => c.id === Number(peopleId)) || {
        firstName: "",
        lastName: "",
        id: Number(peopleId) || "new",
      }
    );
  }, [peopleId, connections]);

  return (
    <>
      <Menu attached="top">
        <Menu.Item header>Person And Relations</Menu.Item>
      </Menu>
      <Segment attached="bottom">
        <Grid>
          <Grid.Row>
            <Grid.Column computer={8} tablet={8} mobile={16} largeScreen={8}>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Input
                  label="First Name"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.errors.firstName}
                  autoComplete="off"
                />
                <Form.Input
                  label="Last Name"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.errors.lastName}
                  autoComplete="off"
                />

                <Button color="orange" type="button" as={NavLink} to={"/"}>
                  Back
                </Button>

                <Button
                  color="green"
                  type="submit"
                  loading={formik.isSubmitting}
                  disabled={formik.isSubmitting || !isEmpty(formik.errors)}
                  style={{ marginBottom: 20 }}
                  disabledContent
                >
                  Submit
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16} largeScreen={8}>
              <Relations />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8} tablet={16}>
            <RelationshipTypes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
