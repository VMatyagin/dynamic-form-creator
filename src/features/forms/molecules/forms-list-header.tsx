import React from "react";
import { Box, Button } from "grommet";
import { Add, Refresh } from "grommet-icons";
import { Link } from "react-router-dom";

export const FormsListHeader = ({
  refetch,
}: FormsListHeaderProps): React.ReactElement => (
  <Box
    align="center"
    justify="between"
    direction="row"
    border={{ side: "bottom", color: "light-6" }}
    pad="small"
    fill="horizontal"
  >
    <Link to={"/create"}>
      <Box align="center">
        <Add color="brand" />
      </Box>
    </Link>
    <Button
      icon={<Refresh />}
      plain={true}
      type="button"
      reverse={true}
      primary={false}
      onClick={() => refetch()}
    />
  </Box>
);

interface FormsListHeaderProps {
  refetch: () => void;
}
