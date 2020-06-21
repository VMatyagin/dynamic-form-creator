import { Box } from "grommet";
import React from "react";
import { ChildrenInterface } from "../../../ui/types/ChildrenInterface";

export const SideBarItem = ({ children }: ChildrenInterface) => {
return <Box margin="xsmall">{children}</Box>;
};
