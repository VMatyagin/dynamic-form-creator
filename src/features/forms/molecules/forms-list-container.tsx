import { Box, Accordion } from "grommet";
import React from "react";
import { ChildrenInterface } from "../../../ui/types/ChildrenInterface";

export const FormsListContainer = ({ children }: ChildrenInterface) => (
  <Box overflow="auto">
    <Accordion animate={true} multiple={true}>
      {children}
    </Accordion>
  </Box>
);
