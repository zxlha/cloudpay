<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-11 09:11:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <arrow></arrow>
      <p class="msgcode">{{msg}}</p>
      <tel></tel>
      <i class="icon"><img src="../assets/img/radio_unselected.png" alt=""></i>
      <p class="treaty">我已阅读并同意<span>《银联用户服务协议》、《隐私政策》</span></p>
      <regBut></regBut>
  </div>
</template>

<script>
import arrow from '../components/arrow';
import tel from '../components/tel';
import regBut from '../components/regBut';
  export default {
    name:'register',
    data(){
        return{
          msg:"手机号注册"
        }
    },
    components:{
        arrow,tel,regBut
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    
  }
  html{
    font-size:26.67vw;
  }
  body{
    font-size: 14px;
    height: 100%;
    background-color: #f6f6f6;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .arrow{
    margin:10px 0 0 5px;
    float: left;
    height: .4rem;
  }
  .msgcode{
    margin-top: 10px;
    font-size: .18rem;
    text-align: center;
    width: 85%;
    float: right;
    line-height: .28rem;
    padding-right: .45rem;
    box-sizing: border-box;
  }
  .tel{
    width: 100%;
    height: 2rem;
    margin-top: .3rem;
  }

  .treaty{
    font-size: 12px;
    float: left;
    margin-top: .35rem;
  }
  .treaty span{
    color: blue;
  }
  .icon{
    display: block;
    margin:.35rem .1rem 0 .2rem;
    float: left;
    
  }
  .icon img{
    width: 14px;
  }
  .regBut{
    clear: both;
  }
</style>
