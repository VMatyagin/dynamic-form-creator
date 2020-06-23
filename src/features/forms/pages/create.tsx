import React from "react";
import { FormsCommonTemplate } from "../templates/common";
import { CreateSidebar, EmptyFormView } from "../molecules";
import { useParams } from "react-router-dom";
import { FormCreateForm } from "../organisms";

export const FormsCreatePage = () => {
  const { formId } = useParams();

  return (
    <FormsCommonTemplate sidebar={<CreateSidebar />}>
      {formId ? <FormCreateForm formId={formId} /> : <EmptyFormView />}
    </FormsCommonTemplate>
  );
};
