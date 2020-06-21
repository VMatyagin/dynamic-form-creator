import React, { useState } from "react";
import { FormsCommonTemplate } from "../templates/common";
import { CreateSidebar, FormCreateCard } from "../molecules";
import { Box, Button } from "grommet";
import { Formik, Form } from "formik";
import { Prompt } from "react-router-dom";
import { FormCreateField } from "../types";

export const FormsCreatePage = () => {
  const [initialValues, setInitialValues] = useState<FormCreateField[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const addField = () => {
    const newInitial = [...initialValues];
    newInitial.push({
      order: counter,
      input_value: "",
      required_value: false,
      element_type_id: 0,
    });
    setCounter(counter + 1);
    setInitialValues(newInitial);
  };

  const resetFields = () => {
    setInitialValues([]);
  };

  /*
   * Добавляется поле в массив, либо обнуляет, если получает true на входе
   */
  const handleAdd = (is?: boolean) => {
    is ? resetFields() : addField();
  };

  const onDeleteClick = (
    index: number,
    ValuesFromFormik: FormCreateField[]
  ) => {
    console.log(ValuesFromFormik);

    const newInitial = [...ValuesFromFormik];
    newInitial.splice(index, 1);
    setInitialValues(newInitial);
  };

  return (
    <FormsCommonTemplate sidebar={<CreateSidebar handleAdd={handleAdd} />}>
      <Box fill>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              {values.map((item, index) => {
                return (
                  <FormCreateCard
                    key={item.order}
                    index={index}
                    value={values[index]}
                    handleChange={handleChange}
                    onClick={() => onDeleteClick(index, values)}
                  />
                );
              })}
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </FormsCommonTemplate>
  );
};
