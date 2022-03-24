import { rootRoutes } from './modules/root'
import { errorRoutes } from './modules/error'
import { demoRoute } from './modules/demo'

export const routes = [
  ...rootRoutes,
  ...demoRoute,
  ...errorRoutes
];