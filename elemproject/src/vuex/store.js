// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import localStorage from '../assets/utils/localStorage'
// 导入各个模块的初始状态和 mutations
import global from './modules/global'

Vue.use(Vuex)
export default new Vuex.Store({
  // 组合各个模块
  modules: {
    global
  },
  // 插件
  plugins: [createPersistedState({
    key: require('../../package.json').name + 'vuex',
    paths: [], // 只缓存service里的state
    getState: (key) => localStorage.get(key),
    setState: (key, state) => localStorage.set(key, state)
  })]
})
