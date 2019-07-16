import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './styles/index.scss' // global css
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import UtilsPlugin from './assets/utils'

Vue.config.productionTip = false

Vue.use(UtilsPlugin)

sync(store, router)

window.$globalHub = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
