export const demoRoute = [
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
    path: '/demo/nested-routes',
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
        path: '/demo/news/posts',
        name: 'newsDetail',
        component: () => import('@/views/demo/news/newsDetail.vue'),
        meta: {
          title: '內文',
          showParent: false,
        },
      },
    ]
  },
]