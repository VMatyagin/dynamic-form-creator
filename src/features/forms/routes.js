import { FormsHomePage } from "./pages/home"
import { FormsViewPage } from "./pages/view"

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
]
