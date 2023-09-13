import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import Icon from "./assets/icons/Icon.vue"
import i18n from './locales/i18n'

const app = createApp(App)

app.component('icon',Icon);

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
