import './assets/styles/main.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import VueClickAway from 'vue3-click-away'
import V3ScrollLock from 'v3-scroll-lock'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCat, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faCat, faXmark, faGithub, faLinkedinIn, faTelegram, faInstagram)

const app = createApp(App)

app.use(VueClickAway)
app.use(V3ScrollLock, {})
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
