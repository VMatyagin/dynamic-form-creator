import { Box } from "grommet";
import React from "react";

export const SelectRenderOption = ({ full_name }: RenderOptionProps) => (
  <Box direction="row" align="center" pad="small" flex={false}>
    {full_name}
  </Box>
);

interface RenderOptionProps {
  full_name: string;
}
