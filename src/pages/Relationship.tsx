import { SyntheticEvent } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Menu, Segment, Form, Grid, DropdownProps } from "semantic-ui-react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../components/Button";
import { internalRoutes } from "../routes-config/App.routes";
import useSocial from "../hooks/useSocial";
import { IDropdownOptionProps } from "../interfaces";

const { visualRelationship } = internalRoutes();
const VisualComponent = visualRelationship.component;

export default function Relationship() {
  const { connections } = useSocial();
  const history = useHistory();
  const location = useLocation();
  const relation = location.pathname.split("/").slice(2, 3)[0];
  const formik = useFormik({
    onSubmit: (values, actions) => {
      if (
        Number(values.personId1) &&
        Number(values.personId2) &&
        Number(values.personId1) !== Number(values.personId2)
      ) {
        history.push(`/relationship/${values.personId1}-${values.personId2}`);
        actions.setSubmitting(false);
      }
    },
    initialValues: {
      personId1: !!relation ? Number(relation.split("-")[0]) : "",
      personId2: !!relation ? Number(relation.split("-")[1]) : "",
    },
    validationSchema: yup.object().shape({
      personId1: yup.mixed().required("Required"),
      personId2: yup.mixed().required("Required"),
    }),
  });

  const mapConnectionOptions = (eliminateId: number | string) =>
    connections.reduce((acc, val) => {
      if (val.id !== eliminateId)
        acc.push({ text: `${val.firstName} ${val.lastName}`, value: val.id });
      return acc;
    }, [] as IDropdownOptionProps[]);

  const handleChange = (
    _: SyntheticEvent<HTMLElement, Event>,
    { name, value }: DropdownProps
  ) => {
    formik.handleChange({ target: { name, value } });
  };

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={16} tablet={16}>
            <Menu attached="top">
              <Menu.Item header>Select Persons</Menu.Item>
            </Menu>
            <Segment attached="bottom">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths={2}>
                  <Form.Dropdown
                    fluid
                    search
                    selection
                    label="Person 1"
                    name="personId1"
                    value={formik.values.personId1}
                    onChange={handleChange}
                    options={mapConnectionOptions(formik.values.personId2)}
                    error={formik.errors.personId1}
                  />
                  <Form.Dropdown
                    fluid
                    search
                    selection
                    label="Person 2"
                    name="personId2"
                    value={formik.values.personId2}
                    onChange={handleChange}
                    options={mapConnectionOptions(formik.values.personId1)}
                    error={formik.errors.personId2}
                  />
                </Form.Group>
                <Button
                  color="green"
                  type="submit"
                  disabled={!formik.isValid}
                  disabledContent
                >
                  Submit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Switch>
        <Route
          path={visualRelationship.path}
          exact={visualRelationship.exact}
          component={VisualComponent}
        />
      </Switch>
    </>
  );
}
