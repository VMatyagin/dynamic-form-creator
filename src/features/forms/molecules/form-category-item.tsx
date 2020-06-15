import React from "react";
import { Box, Text } from "grommet";
import { formData } from "../pages/home";

export const FormCategoryItem = ({ label, expiredAt }: formData) => {
  return (
    <Box
      align="center"
      justify="between"
      border={{ side: "top", size: "xsmall" }}
      direction="row"
      pad="small"
    >
      <Text>{label}</Text>
      <Text color="neutral-4">{expiredAt.toLocaleDateString()}</Text>
    </Box>
  );
};
