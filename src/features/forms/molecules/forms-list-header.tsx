import React from "react";
import { Box, Button } from "grommet";
import { Add, Refresh } from "grommet-icons";

export const FormsListHeader = ():React.ReactElement => (
    <Box
        align="center"
        justify="between"
        direction="row"
        border={{ side: "bottom", color: "light-6" }}
        pad="small"
        fill="horizontal"
      >
        <Button
          icon={<Add />}
          plain={true}
          type="button"
          reverse={true}
          primary={false}
        />
        <Button
          icon={<Refresh />}
          plain={true}
          type="button"
          reverse={true}
          primary={false}
        />
      </Box>
)