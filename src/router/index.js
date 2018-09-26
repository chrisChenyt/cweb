import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:() => import(/* webpackChunkName: "index" */ '@/views/index')
    },
    {
      path: '/content',
      name: 'content',
      component:() => import(/* webpackChunkName: "content" */ '@/views/content')
    },
    {
      path: '/mine',
      name: 'mine',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/mine')
    },
    {
      path: '/mine/setting',
      name: 'setting',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/setting')
    },
    {
      path: '/setting/numberSafety',
      name: 'numberSafety',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/numberSafety')
    },
    {
      path: '/setting/settingNews',
      name: 'settingNews',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/settingNews')
    },
    {
      path: '/setting/settingHide',
      name: 'settingHide',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/settingHide')
    },
    {
      path: '/login',
      name: 'login',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/login')
    }
  ]
})
