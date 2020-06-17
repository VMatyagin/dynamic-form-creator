import React from "react";
import { FormsCommonTemplate } from "../templates/common";
import { FormsList } from "../organisms";
import { EmptyFormView } from "../molecules";

export const FormsHomePage = () => {
  return (
    <FormsCommonTemplate sidebar={<FormsList />}>
      <EmptyFormView />
    </FormsCommonTemplate>
  );
};
