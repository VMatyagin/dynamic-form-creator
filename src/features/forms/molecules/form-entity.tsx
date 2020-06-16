import React from "react";
import { Box, Button } from "grommet";
import { Formik, Form } from "formik";
import { CommonFormField } from "./form-field";
import { FormsData } from "../types";

interface InitialValuesObj {
  [key: string]: string;
}

export const FormEntity = ({ form_fields }: FormsData) => {
  const initialValues = form_fields.reduce((acc: InitialValuesObj, item) => {
    acc[item.caption] = "";
    return acc;
  }, {});

  return (
    <Box pad="xsmall" fill>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            {form_fields.map((item) => (
              <CommonFormField
                values={values}
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
