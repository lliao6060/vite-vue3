export const rootRoutes = [
  {
    path: "/",
    name: "Index",
    component:  () => import('@/views/index.vue'),
    meta: {
      title: '首頁',
    },
  },
]