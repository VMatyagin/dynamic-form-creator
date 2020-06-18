import React from "react";
import { Box, Button } from "grommet";
import { Formik, Form } from "formik";
import { CommonFormField } from "./form-field";
import { FormFields } from "../types";
import { Prompt } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SUBMIT_FORM } from "../queries";

interface InitialValuesObj {
  [key: string]: string | number;
}

export const FormEntity = ({ form_fields, form_id }:FormEntityProps) => {

  const initialValues = form_fields.reduce((acc: InitialValuesObj, item) => {
    acc[item.caption] = item.field_submissions[0]
      ? item.field_submissions[0].value
      : "";


    return acc;
  }, {});

  const [submitForm, { error }] = useMutation(SUBMIT_FORM);

  console.log(error);

  const do1 = (values: InitialValuesObj) => {
    let data:InitialValuesObj[] = []
    form_fields.forEach( (item) => {
      data.push(
        {
          form_element_id: item.id,
          value: values[item.caption]
        }
      )
    })
    return data
  }

  return (
    <Box pad="xsmall" fill>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
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

          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ values, handleChange, isSubmitting, dirty }) => (
          <Form>
            <Prompt
              when={dirty}
              message={
                "Вы уверены, что хотите перейти и потерять данные с формы?"
              }
            />
            {console.log(values)}
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
              <Button label="Сброс" type="reset" />
              <Button
                label="Отправить"
                primary={true}
                type="submit"
                disabled={isSubmitting}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


interface FormEntityProps {
  form_fields: FormFields[],
  form_id: number,
}