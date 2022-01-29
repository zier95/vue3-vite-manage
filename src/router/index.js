import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Welcome from '../components/Welcome.vue'

/**
 * 定义路由规则
 */
const routes = [
  {
    name: 'home',
    path: '/',
    meta: {
      // 定义元数据，定义浏览器标题，添加路由权限，配置菜单图标
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '登陆'
        },
        component: Welcome,
      },
      {
        name: 'login',
        path: '/login',
        meta: {
          title: '登陆'
        },
        component: Login,
      },
    ]
  }]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

