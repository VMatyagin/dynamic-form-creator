import React from "react";
import { FormsCommonTemplate } from "../templates/common";
import { FormsList, FormViewWithData } from "../organisms";


export const FormsViewPage = () => {  
    
  return (
  <FormsCommonTemplate>
    <FormsList />
    <FormViewWithData />
  </FormsCommonTemplate>
)};
