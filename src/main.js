import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import 'lib-flexible'
import './styles/base.less'
import Swiper from 'swiper'
window.Swiper = Swiper;
Vue.use(Router)
Vue.use(VueResource)
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$ajax = axios

/*配置路由*/
let router = new Router({
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
      component:() => import(/* webpackChunkName: "mine" */ '@/views/mine'),
      meta: {
        requireAuth: true,// 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/mine/setting',
      name: 'setting',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/setting'),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/setting/numberSafety',
      name: 'numberSafety',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/numberSafety'),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/setting/settingNews',
      name: 'settingNews',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/settingNews'),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/setting/settingHide',
      name: 'settingHide',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/settingHide'),
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component:() => import(/* webpackChunkName: "mine" */ '@/views/login')
    }
  ]
})


router.beforeEach((to,from,next) =>{
  const token = sessionStorage.getItem('demo-token');
  console.log(token)
  if(to.path == '/login'){ // 如果是跳转到登录页的
    if(token != 'null' && token != null){
      next('/') // 如果有token就转向 首页 不返回登录页
    }else{
      next(); // 否则跳转回登录页
    }
  }else{
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if(token != 'null' && token != null){
        Vue.prototype.$ajax.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
        next() // 如果有token就正常转向
      }else{
        next({
          path: '/login',
          query: {redirect: to.name}  // 将跳转的路由name作为参数，登录成功后跳转到该路由
        })
      }
    }else {
      next();
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
