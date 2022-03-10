import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/demo/todo-list',
      name: 'todo-list',
      component: () => import('@/views/demo/todoList.vue')
    },
  ],
})

export default router