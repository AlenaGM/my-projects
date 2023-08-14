import '@/assets/styles/base.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import VueClickAway from 'vue3-click-away'
import V3ScrollLock from 'v3-scroll-lock'

const app = createApp(App)

app.use(VueClickAway)
app.use(V3ScrollLock, {})
app.use(router)

app.mount('#app')
