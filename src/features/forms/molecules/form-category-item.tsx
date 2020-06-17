import React from "react";
import { Box, Text } from "grommet";
import { FormsData } from "../types";
import { useHistory } from "react-router-dom";

export const FormCategoryItem = ({ label, created_at, id }: FormsData) => {
  const date = new Date(created_at).toLocaleDateString();
  let history = useHistory();

  // history push из-за особенностей фокуса Grommet'а
  function handleClick() {
    history.push(`/open/${id}`);
  }

  return (
    <Box
      align="center"
      justify="between"
      border={{ side: "top", size: "xsmall" }}
      direction="row"
      pad="small"
      hoverIndicator={true}
      focusIndicator={true}
      onClick={handleClick}
      style={{
        cursor: "pointer",
      }}
    >
      <Text size="small">{label}</Text>
      <Text color="neutral-4" size="small">
        {date}
      </Text>
    </Box>
  );
};
