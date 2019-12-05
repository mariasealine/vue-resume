import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from "bootstrap-vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);

library.add(faUserSecret, faFontAwesome, faLinkedin, faEnvelope)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
