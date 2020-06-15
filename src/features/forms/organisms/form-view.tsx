import React from "react";
import { RightContainer } from "../../../ui/templates";
import { FormViewHeader, FormEntity } from "../molecules";

export const FormView = () => {
  return (
    <RightContainer>
      <FormViewHeader/>
      <FormEntity/>
    </RightContainer>
  );
};
