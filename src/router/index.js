import { createRouter, createWebHistory } from "vue-router";
import { routes } from './router'

const router = createRouter({
  history: createWebHistory('/'),
  routes,

  //始終滾動到頂部
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0,
    }
  },

  //當前位於route頁面
  linkActiveClass: 'active-link'
})


//設定每一頁的title
router.beforeEach((to, from, next) => {
  if(to.name === 'newsDetail') {
    let s = to.query.postId
    s = s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    const newsDetailTitle = `news-${s}`
    window.document.title = newsDetailTitle
    next()
  } else {
    window.document.title = to.meta.title;
    next()
  }
})

export default router