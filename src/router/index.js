/*
 * @Author: your name
 * @Date: 2019-11-12 15:01:18
 * @LastEditTime: 2019-11-16 08:58:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jsonseverd:\cloudpay\supermail\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/home')
const my = () => import('../views/my/my')
const rich = () => import('../views/rich/rich')
const search = () => import('../views/search/search')
const detaildetail = () => import('../components/detail/detaildetail')
const onlinedetaildetail = () => import('../components/detail/onlinedetaildetail.vue')
const searchdpage = () => import('../components/searchpage/searchdpage')
const online = () => import('../components/searchpage/online')
const get = () => import('../components/searchpage/get')
import register from '../pages/register'
import mypage from '../pages/mypage'
import login from '../pages/login'
import personalSettings from '../pages/personalSettings'
import selimg from '../pages/selimg'
import welcomespag from '../pages/welcomespag'
import pay from '../pages/pay'
import Cardmanagement from '../pages/Cardmanagement'
import Addyinhangka from '../pages/Addyinhangka'
import Zhuanzhang from '../pages/Zhuanzhang'
import Jrecord from '../pages/Jrecord'
import Recharge from '../pages/Recharge'
import Tixian from '../pages/Tixian'
import "../font/iconfont.css"

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/my',
      component:login,
      // props:true,
      // beforeEnter(to,from,next){
      //     console.log("/Orderpage这个路径守卫了");
      //     next();
      // },
    },
    {
      path:'/rich',
      component:Cardmanagement,
      // props:true,
      // beforeEnter(to,from,next){
      //     console.log("/Orderpage这个路径守卫了");
      //     next();
      // },
    },
    {
      path:'/search',
      component:search,
      children:[
        {
          path: '',
          redirect: 'get' //重定向
        },
        {
          path:'get',
          component:get
        },
        {
          path:'online',
          component:online
        },
      ]
    },
    {
      path:'/detaildetail/:id',
      component:detaildetail,
      props:true
    },
    {
      path:'/onlinedetaildetail/:id',
      component:onlinedetaildetail,
      props:true
    },
    {
      path:'/searchdpage',
      component:searchdpage
    },
    {
      path:'/online',
      component:online
    },
    {
      path: '/register',
      component:register
    },
    {
      path: '/mypage',
      component:mypage,
      // meta:{
      //   requireAuth:false
      // }
    },
    {
      path: '/login',
      component:login,
      // props:true,
      // beforeEnter(to,from,next){
      //     console.log("/Orderpage这个路径守卫了");
      //     next();
      // },
    },
    {
      path: '/personalSettings',
      component:personalSettings
    },
    {
      path: '/selimg',
      component:selimg
    },
    {
      path: '/personalSettings/selimg',
      component:selimg
    },
    {
      path: '/personalSettings/welcomespag',
      component:welcomespag
    },
    {
      path: '/personalSettings/pay',
      component:pay
    },
    {
      path: '/welcomespag',
      component:welcomespag
    },
    {
      path: '/pay',
      component:pay
    },
    {
      path: '/Cardmanagement',
      name: 'Cardmanagement',
      component: Cardmanagement
    },
    {
      path: '/Addyinhangka',
      name: 'Addyinhangka',
      component: Addyinhangka
    },
    {
      path: '/Zhuanzhang',
      name: 'Zhuanzhang',
      component: Zhuanzhang
    },
    {
      path: '/Jrecord',
      name: 'Jrecord',
      component: Jrecord
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/Tixian',
      name: 'Tixian',
      component: Tixian
    }
  ]
})
// router.beforeEach((to,from,next)=>{
//   if(to.meta.requireAuth){
//       if(localStorage.getItem('name')==null){
//           next('/login');
//       }else{
//           next();
//       }
//   }else{
//      next();
//   }
// });

export default router;



