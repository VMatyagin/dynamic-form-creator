import React from "react";
import { TextInput, FormField } from "grommet";

export const CommonFormField = ({ values, handleChange, fieldName, fieldLabel }: any) => { 
    
  return (
    <FormField label={fieldLabel} required={true}>
      <TextInput
        name={fieldName}
        value={values[fieldName] || ""}
        onChange={handleChange}
      />
    </FormField>
  );
};
