import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from './store';
import "@/assets/styles/global.scss";

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
