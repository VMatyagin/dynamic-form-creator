import React, { useState } from "react";
import { Box, Button } from "grommet";
import { FormCreateCard } from "../molecules";
import { FormInitData, FieldTypeData } from "../types";
import { useParams } from "react-router-dom";
import { FormikValues, useFormik } from "formik";
import { FormFieldSchema } from "../../create-form-fields-schema";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { LOAD_FIELD_TYPES, UPSERT_FORM_FIELDS } from "../queries";
import { Add } from "grommet-icons";

export const FormCreateForm = ({ formId }: FormProps) => {
  const [initialValues, setInitialValues] = useState<FormInitData>({
    fields: [],
  });
  const [counter, setCounter] = useState<number>(0);

  const formikConfig = {
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit(values: FormikValues) {
      console.log(values);
    },
    validationSchema: FormFieldSchema,
    validateOnChange: false,
  };

  const formikBag = useFormik(formikConfig);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
    submitForm,
  } = formikBag;

  const addField = () => {
    const newInitial = { ...values };
    newInitial.fields.push({
      order: counter,
      caption: "",
      required: false,
      element_type: {
        id: 0,
        label: "",
        type: "",
      },
      extra_fields: [""],
    });
    setCounter(counter + 1);
    setInitialValues(newInitial);
  };

  const resetFields = () => {
    setInitialValues({ fields: [] });
  };

  console.log(initialValues);

  const handleAnswer = (index: number, is?: boolean) => {
    const newInitial = { ...values };
    if (is) {
      newInitial.fields[index].extra_fields.push("");
    } else {
      newInitial.fields[index].extra_fields.pop();
    }
    setInitialValues(newInitial);
  };

  const onDeleteClick = (index: number) => {
    const newInitial = { ...values };
    newInitial.fields.splice(index, 1);
    setInitialValues(newInitial);
  };

  const fieldsQueryData = useQuery<FieldTypeData>(LOAD_FIELD_TYPES);

  const [upsertFields, { loading: mutationIsLoading }] = useMutation(
    UPSERT_FORM_FIELDS
  );

  const sendFields = () => {
    upsertFields({
      variables: {
        objects: 1,
      },
    });
  };

  return (
    <Box fill gap="small">
      <form onSubmit={handleSubmit}>
        {values.fields.map((item, index) => (
          <FormCreateCard
            key={item.order}
            index={index}
            value={values.fields[index]}
            handleChange={handleChange}
            onDeleteClick={() => onDeleteClick(index)}
            setFieldValue={setFieldValue}
            element_types={fieldsQueryData}
            error={errors && errors.fields && errors.fields[index]}
            handleAnswer={(is: boolean) => handleAnswer(index, is)}
          />
        ))}
      </form>
      <Box direction="row-responsive" justify="center" gap="small">
        <Button icon={<Add />} onClick={addField} label="Добавить поле" />
        <Button label="Сбросить" onClick={resetFields} />
        <Button label="Сохранить" onClick={submitForm} primary />
      </Box>
    </Box>
  );
};

interface FormProps {
  formId: number;
}
