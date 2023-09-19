import '@/assets/styles/base.scss'

import { createApp } from 'vue'

import App from './App.vue'
import VueClickAway from 'vue3-click-away'
import V3ScrollLock from 'v3-scroll-lock'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCat, faBarsStaggered, faXmark, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(
  faCat,
  faBarsStaggered,
  faXmark,
  faChevronUp,
  faInstagram,
  faTelegram,
  faGithub,
  faLinkedinIn
)

const app = createApp(App)

app.use(VueClickAway)
app.use(V3ScrollLock, {})

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
