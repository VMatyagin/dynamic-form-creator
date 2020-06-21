import React from "react";
import {
  Nav,
  Button,
  TextInput,
  Box,
  FormField,
  Select,
  CheckBox,
} from "grommet";
import { SideBarItem } from "./create-form-sidebar-item";
import { Add } from "grommet-icons";
import { useHistory } from "react-router-dom";
import { LOAD_ORGANISATIONS, CREATE_FORM } from "../queries";
import { OrganisationsData } from "../types";
import { Spinner } from "../../../ui/atoms";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Form, Formik } from "formik";
import { CreateFormSchema } from "../../create-form-schema";

export const CreateSidebar = ({ handleAdd }: SidebarProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const { loading, data: organisationsData } = useQuery<OrganisationsData>(
    LOAD_ORGANISATIONS
  );
  const [createForm, { data: formData, loading: formIsCreating }] = useMutation(
    CREATE_FORM
  );

  let form_id;
  if (formData) {
    form_id = formData.insert_forms.returning[0].id;
  }

  const renderOption = ({ full_name }: RenderOptionProps) => (
    <Box direction="row" align="center" pad="small" flex={false}>
      {full_name}
    </Box>
  );

  interface RenderOptionProps {
    full_name: string;
  }

  const SideBarData = () => (
    <Formik
      enableReinitialize
      initialValues={{
        label: "",
        organisations: {
          full_name: "",
          id: "",
        },
        visible: false,
      }}
      onSubmit={(values) => {
        createForm({
          variables: {
            objects: {
              label: values.label,
              organisation_id: values.organisations.id,
              visible: values.visible,
            },
          },
        });
      }}
      onReset={() => {
        handleAdd(true);
      }}
      validationSchema={CreateFormSchema}
      validateOnChange={false}
    >
      {({
        values,
        handleChange,
        handleReset,
        setFieldValue,
        errors,
      }) => (
        <Form>
          <SideBarItem>
            <FormField label="Название формы" error={errors.label}>
              <TextInput
                plain
                placeholder="Название"
                name="label"
                value={values.label}
                onChange={handleChange}
              />
            </FormField>
          </SideBarItem>
          <FormField label="Для кого она?" error={errors.organisations?.id}>
            <Select
              name="organisations"
              options={organisationsData!.organisations}
              valueLabel={renderOption(values.organisations)}
              onChange={(event) => setFieldValue("organisations", event.value)}
            >
              {renderOption}
            </Select>
          </FormField>
          <Box>
            <SideBarItem>
              <Button
                gap="xsmall"
                plain
                icon={<Add />}
                label={"Добавить поле"}
                onClick={() => handleAdd()}
                type="button"
              />
            </SideBarItem>
            <SideBarItem>
              <CheckBox
                label="Включить видимость"
                name="visible"
                checked={values.visible}
                onChange={handleChange}
              />
            </SideBarItem>
            <SideBarItem>
              <Button
                label="Сброс"
                type="reset"
                onClick={handleReset}
                disabled={formIsCreating}
              />
            </SideBarItem>
            <SideBarItem>
              <Button
                label="Сохранить"
                primary={true}
                type="submit"
                disabled={formIsCreating}
              />
            </SideBarItem>
          </Box>
        </Form>
      )}
    </Formik>
  );

  return (
    <Nav fill>
      {!organisationsData || loading ? <Spinner /> : <SideBarData />}
      <SideBarItem>
        <Button label="На главную" type="button" onClick={handleClick} />
      </SideBarItem>
    </Nav>
  );
};

interface SidebarProps {
  handleAdd: (is?: boolean) => void;
}
