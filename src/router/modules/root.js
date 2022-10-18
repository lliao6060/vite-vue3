const rootRoutes = [
  {
    path: "/",
    name: "Index",
    component:  () => import('@/views/Index.vue'),
    meta: {
      title: '首頁',
    },
  },
]

export default {
  routes: rootRoutes,
}