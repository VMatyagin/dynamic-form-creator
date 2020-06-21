import {
  TextInput,
  TextArea,
  Select,
  RadioButton,
  CheckBox,
  Box,
  Text,
  Button,
  FormField,
} from "grommet";
import React, { useState } from "react";
import { inputSelect } from "../lib/input-select";
import { Close } from "grommet-icons";
import { FormCreateField } from "../types";

export const FormCreateCard = ({
  value,
  index,
  onClick,
  handleChange,
}: CardProps) => {
  return (
    <Box
      fill="horizontal"
      margin={{
        vertical: "small",
      }}
      pad="small"
      background="light-1"
      elevation="medium"
      gap="small"
    >
      <Box direction="row" justify="between">
        <TextInput
          name={`[${index}].input_value`}
          value={value.input_value}
          placeholder="Введите заголовок"
          size="medium"
          plain
          required
          onChange={handleChange}
        />
        <Button icon={<Close />} onClick={onClick} />
      </Box>
      <CheckBox
        name={`[${index}].required_value`}
        checked={value.required_value}
        onChange={handleChange}
        label="Обязательный ответ?"
      />
    </Box>
  );
};

interface CardProps {
  onClick: () => void;
  index: number;
  value: FormCreateField;
  handleChange: (event: React.ChangeEvent) => void;
}
