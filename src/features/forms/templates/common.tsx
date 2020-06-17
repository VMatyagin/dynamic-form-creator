import { CommonContentTemplate } from "../../common/templates/common-contets";
import React from "react";
import { useAuth0, NeedAuth } from "../../common/organisms";
import { Spinner } from "../../../ui/atoms";
import { LeftContainer, RightContainer } from "../../../ui/templates";

export const FormsCommonTemplate = ({
  sidebar,
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
      <LeftContainer>{sidebar}</LeftContainer>
      <RightContainer>{children}</RightContainer>
    </CommonContentTemplate>
  );
};

interface FormsContentTemplateProps {
  sidebar: React.ReactElement;
  children: React.ReactElement;
}
