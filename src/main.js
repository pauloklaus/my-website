import Vue from "vue"
import router from "./router";
import App from "./App.vue"

import "./plugins/axios";
import "./plugins/bootstrap-vue";
import "./plugins/vue-webshell";
import "./plugins/psk-inputsearch";
import "./plugins/psk-copyandshare";
import "./plugins/psk-buttonmenu";
import "./plugins/psk-loadingbar";
import "./plugins/psk-typewriter";
import "./plugins/repositoryimage";
import "./plugins/notify-message";
import "./plugins/timeout-message";
import "./assets/default.css";
import "./resources/eventbus";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
