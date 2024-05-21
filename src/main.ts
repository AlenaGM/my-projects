import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import V3ScrollLock from 'v3-scroll-lock'

const app = createApp(App)

app.use(V3ScrollLock, {})
app.use(router)

app.mount('#app')
