<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-15 21:23:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <quit></quit>
      <loginTel></loginTel>
      <loginFot></loginFot>
  </div>
</template>

<script>
import quit from '../components/quit';
import loginTel from '../components/loginTel';
import loginFot from '../components/loginFot';
  export default {
    name:'login',
    data(){
        return{

        }
    },
    components:{
        quit,loginTel,loginFot
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
  }
  a{
    text-decoration: none;
    color: black;
  }
  .loginFot{
      position: absolute;
      bottom:.5rem;
      left: .9rem;
      margin-bottom: 10px;
  }
</style>
