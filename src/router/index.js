import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.$http = axios
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);
import $ from '@/assets/js/jquery-vendor.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/js/flexible.js'
import home from '@/pages/home'
import NotFound from '@/pages/404'
import query from '@/pages/query'
import homePage from '@/pages/homePage'
import video from '@/pages/video'
import headline from '@/pages/headline'
import user from '@/pages/user'
import content from '@/pages/content'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', component: NotFound },
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          component: homePage
        },
        {
          path: '/video',
          component: video
        },
        {
          path: '/headline',
          component: headline
        },
        {
          path: '/user',
          component: user
        },
      ]
    },
    {
      path: '/query',
      name: 'query',
      component: query
    },
    {
      path: '/content/:id',
      name: 'content',
      component: content
    },
  ]
})
