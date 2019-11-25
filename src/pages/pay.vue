<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-14 16:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <div class="pay-top">
        <myArrow></myArrow>
        <p class="msgcode">{{msg}}</p>
      </div>
      <paypassword></paypassword>
      <payBut></payBut>
  </div>
</template>

<script>
import myArrow from '../components/myArrow';
import paypassword from '../components/paypassword';
import payBut from '../components/payBut';

  export default {
    name:'pay',
    data(){
        return{
          msg:"支付密码"
        }
    },
    components:{
        myArrow,paypassword,payBut
    }
  }
</script>

<style scoped>
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
  }
  a{
    text-decoration: none;
    color: black;
  }
  .pay-top{
     width: 100%;
    height: .5rem;
    background: #ffffff;
    clear: both;
    margin: 0 auto;  

    background-color: #fff;
  }
  .myArrow{
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
</style>
