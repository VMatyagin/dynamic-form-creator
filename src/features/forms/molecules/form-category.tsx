import React from "react";
import { AccordionPanel } from "grommet";

export const FormCategory = ({ children, label }:FormCategoryProps) => (
  <AccordionPanel label={label}>
    {children}
  </AccordionPanel>
);

interface FormCategoryProps {
    children: React.ReactNode,
    label: string,
}