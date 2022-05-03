import { rootRoutes } from './modules/root'
import { errorRoutes } from './modules/error'
import { demoRoute } from './modules/demo'
import { compoRoutes } from './modules/compo'

export const routes = [
  ...rootRoutes,
  ...demoRoute,
  ...compoRoutes,
  ...errorRoutes,
];