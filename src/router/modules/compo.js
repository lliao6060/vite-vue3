export const compoRoutes = [
  {
    path: '/compo',
    name: 'Components',
    component:  () => import('@/views/compo/Index.vue'),
    meta: {
      title: '組件範例',
    },
  },
]