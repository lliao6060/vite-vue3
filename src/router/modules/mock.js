const mockRoutes = [
  {
    path: '/remock',
    name: 'Remock',
    component:  () => import('@/views/remock/index.vue'),
    meta: {
      title: '假資料',
    },
  },
]

export default {
  routes: mockRoutes,
}
