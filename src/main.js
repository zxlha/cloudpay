/*
 * @Author: your name
 * @Date: 2019-11-08 19:53:40
 * @LastEditTime: 2019-11-09 17:33:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import { request } from './network/request';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.timeOut=5000
//基本使用
// axios({
//   url: '/books?id=878912',
//   method:"get",
// }).then(res => {
//   console.log(res);
// })
//axios发送并发请求
// axios.all([
//   axios({
//     url: '/books'
//   }), axios({
//     url: '/books?id=878912'
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
//创建对应的axios的实例
// const instancel = axios.create({
//   baseURL:'http://localhost:3000',
//   timeout:5000
// })
// instancel({
//   url:'/books'
// }).then(res=>{
//   console.log(res)
// })

//5:封装一个request模块
// import {request} from "./network/request"
// request({
//   url: "/books"
// }, res => {
//   console.log(res);
//   success(res);
// }),err => {
//   console.log(err);
//   failure(err);
// }
request({
  url:'/books'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
