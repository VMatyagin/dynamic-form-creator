import * as Yup from 'yup';
export const  CreateFormSchema = Yup.object().shape({
    label: Yup.string()
      .min(5, "Придумай уже более нормальное название")
      .required("Введите название"),
    organisations: Yup.object().shape({
        id: Yup.string()
        .required("Выбери кому будет доступна форма"),
    })
})
