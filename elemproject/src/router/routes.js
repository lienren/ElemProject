/* eslint-disable no-undef */
// 生产/测试环境，使用路由懒加载
const view = file => require(`@/pages/${file}.vue`).default
export default [
  { path: '/', component: view('index') },
  { path: '/index', component: view('index') },
  { path: '/search', component: view('search1') },
  { path: '/search2', component: view('search2') },
  { path: '/detail', component: view('detail') },
  { path: '/detail2', component: view('detail2') }
]
