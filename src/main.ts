import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue-select/dist/vue-select.css'
import App from './App.vue'
import router from './router'
import { createYmaps } from 'vue-yandex-maps'

const app = createApp(App)

app.use(
  createYmaps({
    apikey: import.meta.env.VITE_MAP_API_KEY,
  }),
)

app.use(createPinia()).use(router).mount('#app')
