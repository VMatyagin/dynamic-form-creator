import { CommonContentTemplate } from "../../common/templates/common-contets";
import React from "react";
import { useAuth0, NeedAuth } from "../../common/organisms";
import { Spinner } from "../../../ui/atoms";
import { LeftContainer, RightContainer } from "../../../ui/templates";

export const FormsCommonTemplate = ({
  children,
}: FormsContentTemplateProps): JSX.Element => {
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return (
      <CommonContentTemplate>
        <NeedAuth />
      </CommonContentTemplate>
    );
  }

  return (
    <CommonContentTemplate>
      <LeftContainer>{children[0]}</LeftContainer>
      <RightContainer>{children[1]}</RightContainer>
    </CommonContentTemplate>
  );
};

interface FormsContentTemplateProps {
  children: any[];
}
