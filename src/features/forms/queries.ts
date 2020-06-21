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
      form_fields {
        id
        caption
        element_type {
          id
          name
        }
        field_submissions(
          order_by: { form_submission: { updated_at: desc } }
          limit: 1
        ) {
          value
        }
      }
      created_at
    }
  }
`;

export const SUBMIT_FORM = gql`
  mutation MyMutation($objects: [form_submissions_insert_input!]! = {}) {
    insert_form_submissions(objects: $objects) {
      affected_rows
    }
  }
`;

export const LOAD_FIELD_TYPES = gql`
  query MyQuery {
    element_types(order_by: { id: asc }) {
      label
      type
      id
    }
  }
`;

export const LOAD_ORGANISATIONS = gql`
  query MyQuery {
    organisations(order_by: { level: asc, name: asc }) {
      id
      full_name
    }
  }
`;

export const CREATE_FORM = gql`
  mutation MyMutation($objects: [forms_insert_input!]! = {}) {
    insert_forms(
      objects: $objects
      on_conflict: {
        constraint: forms_pkey
        update_columns: [label, organisation_id]
      }
    ) {
      returning {
        id
      }
    }
  }
`;
