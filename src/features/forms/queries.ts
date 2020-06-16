import gql from "graphql-tag";

export const GET_ALL_FORMS = gql`
  query MyQuery {
    organisations {
      id
      name
      forms {
        id
        label
        form_fields {
          id
          caption
        }
        user {
          full_name
        }
        created_at
      }
    }
  }
`;

export const GET_FORM_BY_ID = gql`
  query MyQuery($formId: Int!) {
    forms(where: { id: { _eq: $formId } }) {
      id
      label
      user {
        full_name
      }
      created_at
      form_fields {
        id
        caption
      }
    }
  }
`;
