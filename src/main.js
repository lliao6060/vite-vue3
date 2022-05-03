import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from './store';
import 'maju-ui';
import "@/assets/styles/global.scss";
import common from '@/common.js'
import fixLandscape from './mixin/fix-landscape.js'

import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App);

app.config.globalProperties.$common = common;
app.component(VueCountdown.name, VueCountdown);

app.use(pinia);
app.use(router);
app.mixin(fixLandscape)

app.mount('#app')
