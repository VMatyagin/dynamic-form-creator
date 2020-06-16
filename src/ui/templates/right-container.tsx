import { ChildrenInterface } from "../types/ChildrenInterface";
import React from "react";
import { Box } from "grommet";

export const RightContainer = ({children}:ChildrenInterface) => (
    <Box
        fill
        align="center"
        justify="center"
        direction="column"
        basis="3/4"
        margin="small"
    >
        {children}
    </Box>
)