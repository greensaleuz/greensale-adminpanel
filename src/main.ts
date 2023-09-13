import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import Icon from "./assets/icons/Icon.vue"

const app = createApp(App)

app.component('icon',Icon);

app.use(createPinia())
app.use(router)

app.mount('#app')
