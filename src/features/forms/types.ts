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
  extra_fields: {
    id: number
    value: string
  }
  field_submissions: FieldSubmittion[];
}

export interface FormCreateField {
  order: number;
  caption: string;
  required: boolean;
  element_type: FieldType;
  extra_fields: string[]
}

export interface FormInitData {
  fields: FormCreateField[]
}

export interface FormsData {
  id: number;
  created_at: string;
  label: string;
  visible: boolean;
  user: User;
  organisation: Organisations
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
