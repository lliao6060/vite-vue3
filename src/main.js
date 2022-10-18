import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from './store'
import 'maju-ui/scss/maju.scss'
// import 'maju-ui';
// import 'maju-ui/scss/maju-grid.scss';
import "@/assets/scss/app.scss"
import common from '@/common.js'
import { getImageUrl, mobileDevice } from  '@/utils'
import fixLandscape from './mixin/fix-landscape.js'
import Message from './plugins/message/index'

import VueLazyLoad from 'vue3-lazyload'
import VueCountdown from '@chenfengyuan/vue-countdown'

const app = createApp(App);

app.config.globalProperties.$common = common;
app.use(VueLazyLoad, {
  loading: mobileDevice ? getImageUrl('loading_p.jpg') : getImageUrl('loading_1920X765.jpg'),
  lifecycle:{
    loading: (el) => {
      // console.log('loading', el)
    },
    error: (el) => {
      // console.log('error', el)
    },
    loaded: (el) => {
      // console.log('loaded', el)
    }
  }
})
app.component(VueCountdown.name, VueCountdown)

app.use(pinia)
app.use(router)
app.use(Message)
app.mixin(fixLandscape)

app.mount('#app')
