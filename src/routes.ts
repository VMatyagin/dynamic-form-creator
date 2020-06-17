import { renderRoutes } from "react-router-config"
import { formRoutes } from "./features/forms/routes"
import { Route404 } from "./features/common/routes"


const routes = [
    ...formRoutes(),
    ...Route404()
  ]

export const rootRoutes = () => renderRoutes(routes)