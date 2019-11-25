<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-15 19:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
    <router-link to="personalSettings/">
      <myHeader></myHeader>
    </router-link>
      <center></center>
  </div>
</template>

<script>
import myHeader from '../components/myHeader';
import center from '../components/center';
import personalSettingsVue from '../pages/personalSettings';
  export default {
    name:'mypage',
    data(){
        return{
            
        }
    },
    methods:{
      gopersonpage(){
        this.$router.push('personalSettings/')
      }
    },
    components:{
        myHeader,center
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
  .myHeader{
      padding: .4rem 0;
  }
</style>
