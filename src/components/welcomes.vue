<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-14 16:31:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <div class="welcomes-box">
          <p>欢迎语</p>
          <rightArrow class="welcomes-Arrow"></rightArrow>
      </div>
  </div>
</template>

<script>
import rightArrow from '../components/rightArrow';

  export default {
    name:'personalSettings',
    data(){
        return{

        }
    },
    components:{
        rightArrow
    }
  }
</script>

<style scoped>
.welcomes-box{
    width: 90%;
    height: .5rem;
    /* background: #ffffff; */
    clear: both;
    margin: .2rem auto;  
    border-radius: 15px;
    
}

.welcomes-box p{
    float: left;
    line-height: .5rem;
    margin-left: 15px;
    font-size: 14px;
}
.welcomes-Arrow{
    float: right;
    margin-top: .15rem;
}
</style>
