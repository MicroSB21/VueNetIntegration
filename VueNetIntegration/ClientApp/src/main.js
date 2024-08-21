import { createApp } from 'vue/dist/vue.esm-bundler'
import './assets/main.css'
import router from './routes/index.js'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
