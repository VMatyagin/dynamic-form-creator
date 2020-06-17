import React from "react";
import { Box, Text } from "grommet";
import { FormsData } from "../types";

export const FormCategoryItem = ({ label, created_at, id }:FormsData) => {
  const date = new Date(created_at).toLocaleDateString()
  return (
    <Box
      align="center"
      justify="between"
      border={{ side: "top", size: "xsmall" }}
      direction="row"
      pad="small"
      hoverIndicator
      style={{cursor: 'pointer'}}
    >
      <Text>{label}</Text>
      <Text color="neutral-4">{date}</Text>
    </Box>
  );
};
