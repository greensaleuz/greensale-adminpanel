 
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './index.css'
import router from './router'
import i18n from './locales/i18n'
import VueApexCharts from "vue3-apexcharts";


const app = createApp(App)


app.use(VueApexCharts);
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')