<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-09 19:45:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="phoneNum">
    <!--手机号输入框-->
    <input type="number"  class="tel" placeholder="请输入手机号" maxlength="11">
    <span>+86</span>
  </div>
</template>

<script>
export default {
  name: "phoneNum",
  data() {
    return {
        input:''
    };
  },
  methods: {
    phoneNum() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.phoneNum{
    width: 90%;
    margin: 0 auto;
    height: .5rem;
    clear: both;
    position: relative;
}
.tel{
    height: .5rem;
    border-radius: .1rem;
    border: none;
    outline: 0;
    padding-left: 1rem;
    box-sizing: border-box;
    font-size: .16rem;
}
span{
    display: inline-block;
    position: absolute;
    left: 10px;
    top:.45rem;
    font-size: .16rem;
}
</style>
