const modules = import.meta.globEager('./modules/**/*.js')

export const routes = Object.keys(modules).reduce((routes, key) => {
  const module = modules[key].default
  if (Array.isArray(module)) {
    return [...routes, ...module]
  } else {
    return [...routes, ...module.routes]
  }
}, [])

export default routes
