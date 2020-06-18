import React from "react";
import { TextInput, FormField } from "grommet";

export const CommonFormField = ({ value, handleChange, fieldName, fieldLabel }: any) => {     
  return (
    <FormField label={fieldLabel} required={true}>
      <TextInput
        name={fieldName}
        value={value}
        onChange={handleChange}
      />
    </FormField>
  );
};
