import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueWow from 'vue-wow'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown, faCartPlus, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '../css/style.css'

library.add(faCaretDown, faCartPlus, faUser, faWrench, faFacebook, faLine, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueWow)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
