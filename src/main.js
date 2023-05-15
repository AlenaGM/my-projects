import "./assets/styles/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCat, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faCat, faEnvelope, faXmark, faGithub, faLinkedinIn, faTelegram);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
