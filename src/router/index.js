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
      name: 'todo-list',
      component: () => import('@/views/demo/todoList.vue')
    },
    {
      path: '/demo/pinia',
      name: 'pinia',
      component: () => import('@/views/demo/pinia.vue')
    },
    {
      path: "/",
      redirect:'/index',
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/index',
    }
  ],
})

export default router