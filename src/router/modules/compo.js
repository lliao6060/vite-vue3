const compoRoutes = [
  {
    path: '/compo',
    name: 'Components',
    component:  () => import('@/views/compo/index.vue'),
    meta: {
      title: '組件範例',
    },
  },
]

export default {
  routes: compoRoutes,
}
