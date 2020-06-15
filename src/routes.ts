import { renderRoutes } from "react-router-config"
import { formRoutes } from "./features/forms/routes"


const routes = [
    ...formRoutes(),
  ]

export const rootRoutes = () => renderRoutes(routes)