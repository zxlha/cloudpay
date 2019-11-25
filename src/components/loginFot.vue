<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-15 12:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="loginFot">
    <router-link to="register/">
      <p class="newUser">新用户注册</p>
    </router-link>
    <p class="question">常见登陆问题？</p>
  </div>
</template>
<script>
import register from '../pages/register';

export default {
  name: "password",
  data() {
    return {
        
    };
  },
  methods: {
    phoneNum() {},
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newUser{
    display: inline-block;
    line-height: 16px;
    color: #999999;
    border-right: 1px solid #999999;
    padding-right: 5px;
    font-size: 16px;
}
.question{
    display: inline-block;
    color: #999999;
    font-size: 16px;
    
}
</style>
