import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from './store';
import "@/assets/styles/global.scss";
import utils from '@/utils.js'

const app = createApp(App);

app.config.globalProperties.$utils = utils;

app.use(pinia);
app.use(router);

app.mount('#app')
