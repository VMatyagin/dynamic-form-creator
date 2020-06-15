import { ChildrenInterface } from "../types/ChildrenInterface";
import React from "react";
import { Box } from "grommet";

export const LeftContainer = ({children}:ChildrenInterface) => (
    <Box
      align="stretch"
      justify="start"
      direction="column"
      basis="1/4"
      border={{ side: "right", color: "light-6" }}
      pad="xsmall"
      fill="vertical"
    >
        {children}
    </Box>
)
