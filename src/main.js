import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from './store';
import 'maju-ui';
import "@/assets/styles/global.scss";
import common from '@/common.js'
import fixLandscape from './mixin/fix-landscape.js'

const app = createApp(App);

app.config.globalProperties.$common = common;

app.use(pinia);
app.use(router);
app.mixin(fixLandscape)

app.mount('#app')
