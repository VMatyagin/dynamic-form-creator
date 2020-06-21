export interface User {
  id: number;
  full_name: string;
}

interface FieldSubmittion {
  id: number;
  value: string;
}

export interface FieldType {
  id: number;
  label: string;
  type: string;
}

export interface FieldTypeData {
  element_types: FieldType[];
}

export interface FormFields {
  id: number;
  caption: string;
  required: boolean;
  field_submissions: FieldSubmittion[];
}

export interface FormCreateField {
  order: number;
  input_value: string;
  required_value: boolean;
  element_type_id: number;
}

export interface FormsData {
  id: number;
  created_at: string;
  label: string;
  user: User;
  form_fields: FormFields[];
}

interface Organisations {
  id: number;
  name: string;
  full_name: string;
  forms: FormsData[];
}

export interface OrganisationsData {
  organisations: Organisations[];
}

export interface FormsViewData {
  forms: FormsData[];
}

export interface InitialValuesObj {
  [key: string]: string | number;
}
