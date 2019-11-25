<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-15 19:45:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <myArrow></myArrow>
      <p class="msgcode">{{msg}}</p>
      <router-link to="selimg/">
        <phs></phs>
      </router-link>
      <router-link to="welcomespag/">
        <welcomes></welcomes>
      </router-link>
      <router-link to="pay/">
        <payment></payment>
      </router-link>
      <div class="logoutBut">退出登录</div>
  </div>
</template>

<script>
import myArrow from '../components/myArrow';
import phs from '../components/phs';
import welcomes from '../components/welcomes';
import payment from '../components/payment';
import selimgVue from '../pages/selimg';
import welcomespagVue from '../pages/welcomespag';
import payVue from '../pages/pay';


  export default {
    name:'personalSettings',
    data(){
        return{
          msg:"个人设置"
        }
    },
    methods:{
      goselimg(){
        this.$router.push('selimg/')
      },
      gowelcomespag(){
        this.$router.push('welcomespag/')
      },
      gopay(){
        this.$router.push('pay/')
      }
    },
    components:{
        myArrow,phs,welcomes,payment
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
    background: #f6f6f6;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .myArrow{
    margin:10px 0 0 5px;
    float: left;
    height: .4rem;
    margin-bottom: .4rem;
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
  .logoutBut{
    width: 1.2rem;
    height: .4rem;
    border-radius: 10px;
    background: red;
    margin: .5rem auto 0 auto;
    text-align: center;
    line-height: .4rem;
    font-size: .14rem;
    color: white;
}
</style>
