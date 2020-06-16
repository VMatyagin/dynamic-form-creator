import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import React from "react";
import { ChildrenInterface } from "../ui/types/ChildrenInterface";
import { useAuth0 } from "../features/common/organisms";

const createApolloClient = (authToken: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://grql.herokuapp.com/v1/graphql",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const GraphQlProvider = ({ children }: ChildrenInterface) => {
  const { idToken } = useAuth0();
  const client = createApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>);
};
