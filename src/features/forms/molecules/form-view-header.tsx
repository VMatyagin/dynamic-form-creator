import React from "react";
import { Box, Button, Text, Heading } from "grommet";
import { Edit } from "grommet-icons";

export const FormViewHeader = () => {
  return (
    <>
      <Box align="center" justify="between" direction="row" fill="horizontal">
        <Text size="medium" color="dark-6">
          Создатель: Матягин Владимир
        </Text>
        <Box align="center" justify="center" direction="row" gap="small">
          <Button 
            label="Результаты" 
            plain 
            type="button" 
            primary={false} />
          <Button
            label="Редактировать"
            icon={<Edit />}
            plain
            type="button"
            primary={false}
            reverse={true}
          />
        </Box>
      </Box>
      <Heading level="3" textAlign="center" size="medium">
        Отчет за сезон
      </Heading>
    </>
  );
};
