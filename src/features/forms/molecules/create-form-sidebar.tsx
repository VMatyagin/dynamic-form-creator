import React from "react";
import {
  Nav,
  Button,
  TextInput,
  FormField,
  Select,
  CheckBox,
} from "grommet";
import { Add } from "grommet-icons";
import { useHistory, useParams } from "react-router-dom";
import {
  LOAD_ORGANISATIONS,
  CREATE_FORM,
  CREATE_GET_FORM_BY_ID,
} from "../queries";
import {
  OrganisationsData,
  FormFields,
  FormsViewData,
} from "../types";
import { Spinner } from "../../../ui/atoms";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { useFormik, FormikValues } from "formik";
import { CreateFormSchema } from "../../create-form-sidebar-schema";
import { SelectRenderOption } from "../atom";

export const CreateSidebar = () => {
  const history = useHistory();
  const { formId } = useParams();

  const handleReturnClick = () => {
    history.push("/");
  };

  // загрузка опций выбора организации
  const { loading: isOrganistaionLoading, data: organisationsData } = useQuery<
    OrganisationsData
  >(LOAD_ORGANISATIONS);

  const [createForm, { data: formData, loading: formIsCreating }] = useMutation(
    CREATE_FORM
  );

  // если пришел formId, значит форма успешно создалась
  formData && !formId && history.push(`/create/${formData.insert_forms.returning[0].id}`);

  const { loading: isformDataLoading, data: formDataFromDB } = useQuery<
    FormsViewData
  >(CREATE_GET_FORM_BY_ID, {
    variables: {
      formId,
    },
  });

  const sendFormToAPI = (values: FormikValues) => {
    createForm({
      variables: {
        objects: {
          id: formId,
          label: values.label,
          organisation_id: values.organisations.id,
          visible: values.visible,
        },
      },
    });
  };

  let initialValues;

  if (formId && formDataFromDB) {
    const { label, organisation, visible } = formDataFromDB.forms[0];
    initialValues = {
      label: label,
      organisations: {
        full_name: organisation.full_name,
        id: organisation.id,
      },
      visible: visible,
    };
  } else {
    initialValues = {
      label: "",
      organisations: {
        full_name: "",
        id: 0,
      },
      visible: false,
    };
  }

  const formikConfig = {
    enableReinitialize: true,
    initialValues,
    onSubmit(values: FormikValues) {
      sendFormToAPI(values);
    },
    validationSchema: CreateFormSchema,
    validateOnChange: false,
  };

  const formikBag = useFormik(formikConfig);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = formikBag;

  console.log("values", values);

  return (
    <Nav fill gap="xsmall">
      <form onSubmit={handleSubmit}>
        <FormField label="Название формы" error={errors.label}>
          <TextInput
            plain
            placeholder="Название"
            name="label"
            value={values.label}
            onChange={handleChange}
          />
        </FormField>
        <FormField label="Для кого она?" error={errors.organisations?.id}>
          {!organisationsData || isOrganistaionLoading ? (
            <Spinner />
          ) : (
            <Select
              name="organisations"
              options={organisationsData!.organisations}
              valueLabel={SelectRenderOption(values.organisations)}
              onChange={(event) => setFieldValue("organisations", event.value)}
            >
              {SelectRenderOption}
            </Select>
          )}
        </FormField>
        <CheckBox
          label="Видимость"
          name="visible"
          checked={values.visible}
          onChange={handleChange}
        />
        {formId && (
          <Button
            label="Сохранить"
            primary={true}
            type="submit"
            disabled={isOrganistaionLoading || formIsCreating}
            fill="horizontal"
            margin={{
              vertical: "small",
            }}
          />
        )}
        {!formId && (
          <Button
            label="Создать"
            primary={true}
            type="submit"
            disabled={formIsCreating}
            fill="horizontal"
            margin={{
              vertical: "small",
            }}
          />
        )}
      </form>
      <Button label="На главную" type="button" onClick={handleReturnClick} />
    </Nav>
  );
};
