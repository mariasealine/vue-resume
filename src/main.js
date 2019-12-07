import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from "bootstrap-vue";
import FlagIcon from "vue-flag-icon";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue, FlagIcon);

library.add(faFontAwesome, faLinkedin, faEnvelope, faGithub)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
