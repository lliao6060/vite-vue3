export const errorRoutes = [
  {
    path: '/404',
    name: 'PageNotExist',
    component:  () => import('@/views/PageNotExist.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  }
]