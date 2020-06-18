import React from "react";
import { Box, Sidebar, Nav, Avatar, Button } from "grommet";
import { Help, Projects, Clock } from "grommet-icons";

export const CreateView = () => {
  return (
    <>
      <Box direction="row" height={{ min: "100%" }}>
      <Sidebar background="brand" round="small"
      header={
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      }
      footer={
        <Button icon={<Help />} hoverIndicator />
      }
    >
      <Nav gap="small">
        <Button icon={<Projects />} hoverIndicator />
        <Button icon={<Clock />} hoverIndicator />
      </Nav>
    </Sidebar>
    </Box>
    </>
  );
};
