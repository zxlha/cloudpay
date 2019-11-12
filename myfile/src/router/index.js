/*
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-11 11:06:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import register from '../pages/register'
import mypage from '../pages/mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/mypage"
    },
    {
      path: '/register',
      component:register
    },
    {
      path: '/mypage',
      component:mypage
    }
  ]
})
