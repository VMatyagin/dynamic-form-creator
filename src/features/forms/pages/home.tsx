import React from "react";
import { FormsCommonTemplate } from "../templates/common";
import { FormsList, FormView } from "../organisms";

const data = [
  {
    label: "Региональное отделение",
    forms: [
      {
        label: "Отчет 1",
        expiredAt: new Date(),
        isActive: true,
      },
      {
        label: "Отчет 2",
        expiredAt: new Date(),
        isActive: false,
      },
    ],
  },
  {
    label: "СПО",
    forms: [
      {
        label: "Отчет 3",
        expiredAt: new Date(),
        isActive: true,
      },
      {
        label: "Отчет 24",
        expiredAt: new Date(),
        isActive: false,
      },
    ],
  },
];

export type formData = {
    label: string,
    expiredAt: Date,
    isActive: boolean,
}

export type forms = {
    label: string,
    forms: formData[]
}

export type dataType = forms[]

export const FormsHomePage = () => (
  <FormsCommonTemplate>
    <FormsList data={data} />
    <FormView />
  </FormsCommonTemplate>
);
