import React from "react";
import { Box, Button } from "grommet";
import { Formik, Form } from "formik";
import { CommonFormField } from "./form-field";
import { FormFields, InitialValuesObj } from "../types";
import { Prompt } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SUBMIT_FORM } from "../queries";

export const FormEntity = ({ form_fields, form_id }: FormEntityProps) => {
  const initialValues = form_fields.reduce((acc: InitialValuesObj, item) => {
    acc[item.caption] = item.field_submissions![0]
      ? item.field_submissions![0].value
      : "";

    return acc;
  }, {});

  const [submitForm, { error, loading }] = useMutation(SUBMIT_FORM);

  console.log(error);

  const do1 = (values: InitialValuesObj) => {
    let data: InitialValuesObj[] = [];
    form_fields.forEach((item) => {
      data.push({
        form_element_id: item.id,
        value: values[item.caption],
      });
    });
    return data;
  };

  return (
    <Box pad="xsmall" fill>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => {
          submitForm({
            variables: {
              objects: {
                form_id,
                form_submission_elements: {
                  data: do1(values),
                },
              },
            },
          });
        }}
      >
        {({ values, handleChange, dirty }) => (
          <Form>
            <Prompt
              when={dirty}
              message={
                "Вы уверены, что хотите перейти и потерять данные с формы?"
              }
            />
            {form_fields.map((item) => (
              <CommonFormField
                value={values[item.caption]}
                handleChange={handleChange}
                fieldName={item.caption}
                fieldLabel={item.caption}
                key={item.id}
              />
            ))}

            <Box align="center" justify="center" direction="row" gap="xsmall">
              <Button label="Сброс" type="reset" disabled={loading} />
              <Button
                label="Отправить"
                primary={true}
                type="submit"
                disabled={loading}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

interface FormEntityProps {
  form_fields: FormFields[];
  form_id: number;
}
