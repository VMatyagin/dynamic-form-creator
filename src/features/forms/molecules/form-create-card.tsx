import { TextInput, Select, CheckBox, Box, Button, FormField } from "grommet";
import React from "react";
import { Trash, Add } from "grommet-icons";
import { FormCreateField, FieldTypeData } from "../types";
import { FormikErrors } from "formik";
import { ChildrenInterface } from "../../../ui/types/ChildrenInterface";
import { QueryResult } from "@apollo/react-common";

const renderOption = ({ label }: RenderOptionProps) => (
  <Box direction="row" align="center" pad="small" height="44px" flex={false}>
    {label}
  </Box>
);

interface RenderOptionProps {
  label: string;
}

const FieldBox = ({ children }: ChildrenInterface) => (
  <Box basis="1/2">{children}</Box>
);

const restrictedId = [4, 5, 6];

export const FormCreateCard = ({
  value,
  index,
  onDeleteClick,
  handleChange,
  setFieldValue,
  element_types,
  handleAnswer,
  error,
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
      <Box direction="row" gap="small" align="stretch">
        <FieldBox>
          <FormField
            error={error && typeof error === "object" && error.caption? error.caption : undefined}
          >
            <TextInput
              name={`fields[${index}].caption`}
              value={value.caption}
              placeholder="Введите заголовок"
              onChange={handleChange}
            />
          </FormField>
        </FieldBox>
        <FieldBox>
          <FormField
            error={error && typeof error === "object" && error.element_type? error.element_type.label : undefined }
          >
            {element_types.data && !element_types.loading && (
              <Select
                options={element_types.data.element_types}
                value={renderOption(value.element_type)}
                onChange={(event) =>
                  setFieldValue(`fields[${index}].element_type`, event.value)
                }
              >
                {renderOption}
              </Select>
            )}
          </FormField>
        </FieldBox>
      </Box>
      {restrictedId.includes(value.element_type.id) &&
        value.extra_fields.map((item, innerIndex) => (
          <TextInput
            key={item}
            name={`fields[${index}].extra_fields[${innerIndex}]`}
            value={item}
            placeholder={`Вариант ответа ${innerIndex + 1}`}
            required
            onChange={handleChange}
          />
        ))}

      {restrictedId.includes(value.element_type.id) && (
        <Button
          icon={<Add />}
          fill
          label="Добавить вариант"
          plain
          onClick={() => handleAnswer(true)}
        />
      )}
      <Box direction="row">
        <CheckBox
          name={`fields[${index}].required_value`}
          checked={value.required}
          onChange={handleChange}
          toggle
          label="Обязательный вопрос?"
        />
        <Button icon={<Trash />} onClick={onDeleteClick} />
      </Box>
    </Box>
  );
};

interface CardProps {
  onDeleteClick: () => void;
  index: number;
  value: FormCreateField;
  handleChange: (event: React.ChangeEvent) => void;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  element_types: QueryResult<FieldTypeData, Record<string, any>>;
  error: string | FormikErrors<FormCreateField> | undefined;
  handleAnswer: (is: boolean) => void;
}
