import * as Yup from "yup";
export const FormFieldSchema = Yup.object().shape({
  fields: Yup.array().of(
    Yup.object().shape({
      caption: Yup.string()
        .min(5, "Придумай уже более нормальное название")
        .required("Введите название"),
      required: Yup.boolean(),
      element_type: Yup.object().shape({
        id: Yup.number(),
        label: Yup.string().required("Нужно выбрать тип поля"),
      }),
    })
  )
})
