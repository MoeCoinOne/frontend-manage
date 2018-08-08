/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//用户管理
//订阅关系
//订阅类型
//内容管理
//资金
// import { Home } from 'layout/'
import { Login } from 'views/'

import Account from './account/'
import Adv from './adv/'
import Function from './function/'
import Demo from './demo/'
import components from './components/'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      hidden: true,
      redirect (to) {
        return 'login'
      }
    }, {
      path: '/login',
      name: '登录',
      hidden: true,
      component: Login
    },
    Function,
    Demo,
    components,
    Adv,
    Account
  ]
})
