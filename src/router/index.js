import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/index",
      name: "Index",
      component:  () => import('@/views/index.vue'),
    },
    {
      path: '/demo/todo-list',
      name: 'TodoList',
      component: () => import('@/views/demo/todoList.vue')
    },
    {
      path: '/demo/pinia',
      name: 'Pinia',
      component: () => import('@/views/demo/pinia.vue')
    },
    {
      path: '/404',
      name: 'PageNotExist',
      component:  () => import('@/views/pageNotExist.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    }
  ],
})

export default router