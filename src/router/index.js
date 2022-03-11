import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/index",
      name: "Index",
      component:  () => import('@/views/index.vue'),
      meta: {
        title: '首頁',
      },
    },
    {
      path: '/demo/todo-list',
      name: 'TodoList',
      component: () => import('@/views/demo/TodoList.vue'),
      meta: {
        title: '代辦事項',
      },
    },
    {
      path: '/demo/pinia',
      name: 'Pinia',
      component: () => import('@/views/demo/Pinia.vue'),
      meta: {
        title: 'pinia',
      },
    },
    {
      path: '/404',
      name: 'PageNotExist',
      component:  () => import('@/views/PageNotExist.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    }
  ],
})

export default router