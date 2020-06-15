import React from "react";
import { Box, Button } from "grommet";
import { Formik, Form } from "formik";
import { CommonFormField } from "./form-field";

export const FormEntity = () => {

    return (
        <Box pad="xsmall" fill>
        <Formik
          initialValues={{
            aa: "123"
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({
            values,
            handleChange,
            isSubmitting,
          }) => (
            <Form>

              <CommonFormField 
                values={ values } 
                handleChange={ handleChange } 
                fieldName='aa'
                fieldLabel='bb'
                />
              <Box align="center" justify="center" direction="row" gap='xsmall'>
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
    )
}