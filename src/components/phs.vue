<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-14 15:43:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <div class="photo-box">
          <p>头像</p>
          <rightArrow></rightArrow>
          <img class="photo" src="../assets/img/ic_user_head.png" alt />
          
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
.photo-box{
    width: 90%;
    height: .7rem;
    background: #ffffff;
    margin-top: 2rem;
    clear: both;
    margin: 2rem auto 0 auto;  
    border-radius: 15px;

}
.photo{
    width: .5rem;
    border-radius: 50%;
    margin-top: 10px;
}
.photo-box p{
    float: left;
    line-height: .7rem;
    margin-left: 15px;
    font-size: 14px;
}
.rightArrow{
    float: right;
    margin-top: .25rem;
}
.photo{
    float: right;
}
</style>
