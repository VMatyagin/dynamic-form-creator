import React, { useState } from "react";
import { FormsCommonTemplate } from "../templates/common";
import { FormsList, FormView } from "../organisms";


export const FormsHomePage = () => {
  const [currentFormId, setFormId] = useState<number>()  
  
  return (
  <FormsCommonTemplate>
    <FormsList setFormId={setFormId} />
    <FormView currentFormId={currentFormId} />
  </FormsCommonTemplate>
)};
