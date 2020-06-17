import React, { useEffect } from "react";
import { RightContainer } from "../../../ui/templates";
import { FormViewHeader, FormEntity } from "../molecules";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_FORM_BY_ID } from "../queries";
import { Spinner } from "../../../ui/atoms";
import { FormsViewData } from "../types";

export const FormView = ( { currentFormId }: FormViewProps ) => {
  const [loadForm, { data, loading }] = useLazyQuery<FormsViewData>(
    GET_FORM_BY_ID
  );
  useEffect(() => {
    loadForm({
      variables: {
        formId: currentFormId
      }
    })
  }, [currentFormId, loadForm])

  

  const ViewWithData = () => (
    <>
      <FormViewHeader
        label={data!.forms[0].label}
        creator={data!.forms[0].user.full_name}
      />
      <FormEntity {...data!.forms[0]} />
    </>
  );

  return (
    <RightContainer>
      {!data && !loading ? (
        <></>
      ) : loading ? (
        <Spinner />
      ) : (
        <ViewWithData />
      )}
    </RightContainer>
  );
};

interface FormViewProps {
  currentFormId: number | undefined
}