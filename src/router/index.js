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
      path: '/demo/nested-routes/parent',
      name: 'NestedRoutesParent',
      component: () => import('@/views/demo/nested-routes/Parent.vue'),
      meta: {
        title: '嵌套路由',
        showParent: true,
      },
      children: [
        {
          path: '/demo/nested-routes/child',
          name: 'NestedRoutesChild',
          component: () => import('@/views/demo/nested-routes/Child.vue'),
          meta: {
            title: '子路由',
            showParent: false,
          },
        },
      ]
    },
    {
      path: '/demo/news',
      name: 'News',
      component: () => import('@/views/demo/news/index.vue'),
      meta: {
        title: '新聞頁',
        showParent: true,
      },
      children: [
        {
          path: '/demo/news/posts/:postId',
          name: 'newsDetail',
          component: () => import('@/views/demo/news/newsDetail.vue'),
          meta: {
            title: '內文',
            showParent: false,
          },
        },
      ]
    },
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
  ],
})


//設定每一頁的title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router