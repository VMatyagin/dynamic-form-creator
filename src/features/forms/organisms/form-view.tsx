import React, { useEffect } from "react";
import { FormViewHeader, FormEntity } from "../molecules";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_FORM_BY_ID } from "../queries";
import { Spinner } from "../../../ui/atoms";
import { FormsViewData } from "../types";
import { useParams } from "react-router-dom";

export const FormViewWithData = () => {
  const { formId } = useParams();

  const [loadForm, { data, loading }] = useLazyQuery<FormsViewData>(
    GET_FORM_BY_ID
  );

  useEffect(() => {
    loadForm({
      variables: {
        formId,
      },
    });
  }, [loadForm, formId]);

  if (loading || !data) return <Spinner />;

  return (
    <>
      <FormViewHeader
        label={data.forms[0].label}
        creator={data.forms[0].user.full_name}
        form_id={formId}
      />
      <FormEntity {...data.forms[0]} form_id={formId} />
    </>
  );
};
