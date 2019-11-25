/*
 * @Author: your name
 * @Date: 2019-11-08 19:53:40
 * @LastEditTime: 2019-11-16 01:56:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery';
import axios from 'axios'
import { request } from './network/request';
// axios.defaults.baseURL = '/api/'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI)
Vue.use(ElementUI);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




