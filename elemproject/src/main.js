import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './styles/index.scss' // global css
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import UtilsPlugin from './assets/utils'
import { Loading } from 'element-ui'
import HttpPlugin from './http'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'

Vue.config.productionTip = false

Vue.use(UtilsPlugin)
Vue.use(HttpPlugin)
Vue.use(Share)

let loading = null

router.beforeEach((to, from, next) => {
  loading = Loading.service({
    lock: true,
    text: '加载中',
    spinner: 'el-icon-loading',
    background: 'rgba(255, 255, 255, 0.5)'
  })

  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)

  setTimeout(() => {
    loading.close()
  }, 1000)
})

sync(store, router)

window.$globalHub = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
