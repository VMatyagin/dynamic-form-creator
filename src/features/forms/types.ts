export interface User {
  id: number;
  full_name: string;
}

interface FormFields {
  id: number;
  caption: string;
};

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
  forms: FormsData[];
}

export interface OrganisationsData {
  organisations: Organisations[];
}

export interface FormsViewData {
    forms: FormsData[];
}