import { CommonContentTemplate } from "../../common/templates/common-contets";
import React from "react";
import { useAuth0, NeedAuth } from "../../common/organisms";

export const FormsCommonTemplate = ({
  children
}: FormsContentTemplateProps): JSX.Element => {
  const { isAuthenticated, loading } = useAuth0();

  if ( loading ) {
    return (<>loading.svg</>);
  }

  if (!isAuthenticated) {
    return (<CommonContentTemplate>
        <NeedAuth/>
      </CommonContentTemplate>)
  }

  return(
  <CommonContentTemplate >
    {children}
  </CommonContentTemplate>
  )
};

interface FormsContentTemplateProps {
  children?: React.ReactNode;
}
