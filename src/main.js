import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import BootstrapVue from "bootstrap-vue";
import FlagIcon from "vue-flag-icon";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFileDownload, faWindowClose, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(FlagIcon);

library.add(faLinkedin, faEnvelope, faGithub, faFileDownload, faWindowClose, faTimes)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
