import React from "react";
import { Box, Button, Text, Heading } from "grommet";
import { Edit } from "grommet-icons";
import { useHistory } from "react-router-dom";

export const FormViewHeader = ({
  label,
  creator,
  form_id,
}: FormViewHeaderProps) => {
  const history = useHistory();

  const handleEditClick = () => history.push(`/create/${form_id}`);

  return (
    <>
      <Box align="center" justify="between" direction="row" fill="horizontal">
        <Text size="medium" color="dark-6">
          Создатель: {creator}
        </Text>
        <Box align="center" justify="center" direction="row" gap="small">
          <Button label="Результаты" plain type="button" primary={false} />
          <Button
            label="Редактировать"
            icon={<Edit />}
            plain
            type="button"
            primary={false}
            reverse={true}
            onClick={handleEditClick}
          />
        </Box>
      </Box>
      <Heading level="3" textAlign="center" size="medium">
        {label}
      </Heading>
    </>
  );
};

interface FormViewHeaderProps {
  label: string;
  creator: string;
  form_id: string;
}
