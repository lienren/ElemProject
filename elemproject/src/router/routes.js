/* eslint-disable no-undef */
import NotFind from '../components/404.vue';
// 生产/测试环境，使用路由懒加载
const view = file => require(`@/pages/${file}.vue`).default;
export default [
  { path: '/', component: view('hello') },
  {
    path: '/main',
    component: resolve => require(['../layout/Layout'], resolve),
    children: [
      {
        path: '/404',
        name: '404',
        component: NotFind,
        meta: { title: '404' }
      },
      {
        path: '/hello',
        name: '首页',
        component: view('hello'),
        meta: { title: '首页' }
      }
    ]
  }
];
