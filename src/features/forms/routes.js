import { FormsHomePage } from "./pages/home"
import { FormsViewPage } from "./pages/view"
import { FormsCreatePage } from "./pages/create"

export const formRoutes = () => [
  {
    path: "/",
    exact: true,
    component: FormsHomePage,
  },
  {
    path: "/open/:formId",
    exact: true,
    component: FormsViewPage,
  },
  {
    path: "/create/",
    exact: true,
    component: FormsCreatePage,
  },
  {
    path: "/create/:formId",
    exact: true,
    component: FormsCreatePage,
  },
]
