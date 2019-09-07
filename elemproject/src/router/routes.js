/* eslint-disable no-undef */
// 生产/测试环境，使用路由懒加载
const view = file => require(`@/pages/${file}.vue`).default
export default [
  { path: '/', component: view('index') },
  { path: '/index', component: view('index') },
  { path: '/search', component: view('search1') },
  { path: '/search2', component: view('search2') },
  { path: '/search3', component: view('search3') },
  { path: '/search4', component: view('search4') },
  { path: '/search5', component: view('search5') },
  { path: '/detail', component: view('detail') },
  { path: '/detail2', component: view('detail2') },
  { path: '/detail3', component: view('detail3') },
  { path: '/detail4', component: view('detail4') },
  { path: '/detail5', component: view('detail5') }
]
