import { Nav, Button, Box } from "grommet";
import React from "react";
import { Add } from "grommet-icons";
const SidebarButton = ({ icon, label, ...rest }:any) => (
    <Box pad="small" fill='horizontal'>
      <Button
        gap="medium"
        alignSelf="start"
        plain
        icon={icon}
        label={label}
        focusIndicator
        hoverIndicator
        {...rest}
      />
    </Box>
  );
export const SideBarItem = ({ label }: SideBarItemProps) => {
  return (
    <Nav gap="small" fill='horizontal' justify='start'>
    <SidebarButton icon={<Add />} label={label} />
    </Nav>
  );
};

interface SideBarItemProps {
  label: string;
}
