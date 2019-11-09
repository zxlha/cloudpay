import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/home')
const my = () => import('../views/my/my')
const rich = () => import('../views/rich/rich')
const search = () => import('../views/search/search')

Vue.use(Router)

export default new Router({
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
      component:my
    },
    {
      path:'/rich',
      component:rich
    },
    {
      path:'/search',
      component:search
    }
  ]
})
