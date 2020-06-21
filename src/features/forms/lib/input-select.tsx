import {
  TextInput,
  TextArea,
  Select,
  CheckBox,
  RadioButton,
  Text,
  Button,
  Box,
} from "grommet";
import React, { useState } from "react";
import { Add } from "grommet-icons";

const SelectInput = () => {
  const [options, setOptions] = useState<JSX.Element[]>([<TextInput />]);

  const onClick = () => {
    let newArray = options.slice();
    newArray.push(<TextInput />);
    setOptions(newArray);
  };

  return (
    <Box gap="small">
      <Text>Варианты ответа:</Text>
      {options.map((item) => item)}
      <Button icon={<Add />} label="Добавить ответ" plain onClick={onClick} />
    </Box>
  );
};

export const inputSelect = (id: number): JSX.Element => {
  const answer = "Это чей-то ответ!";
  switch (id) {
    case 2:
      return <TextInput disabled value={answer} />;
    case 3:
      return <TextArea disabled value={answer} />;
    case 4:
      return <SelectInput />;
    case 5:
      return <SelectInput />;
    case 6:
      return <CheckBox disabled />;
    default:
      return <TextInput disabled />;
  }
};
