<!--
 * @Author: your name
 * @Date: 2019-11-08 19:53:40
 * @LastEditTime: 2019-11-09 11:52:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <tabber>
      <tabbaritem path="/home">
        <i slot="item-icon" class="el-icon-s-home"></i>
        <i slot="item-icon-active" class="el-icon-s-home" id="active"></i>
        <p slot="item-text" >首页</p>
      </tabbaritem>
      <tabbaritem path="/search">
        <i slot="item-icon" class="el-icon-search"></i>
        <i slot="item-icon-active" class="el-icon-search" id="active"></i>
        <p slot="item-text" >发现</p>
      </tabbaritem>
      <tabbaritem path="/rich">
        <i slot="item-icon" class="el-icon-place"></i>
        <i slot="item-icon-active" class="el-icon-place" id="active"></i>
        <p slot="item-text">财富</p>
      </tabbaritem>
      <tabbaritem path="/my">
        <i slot="item-icon" class="el-icon-service"></i>
        <i slot="item-icon-active" class="el-icon-service" id="active"></i>
        <p slot="item-text">我的</p>
      </tabbaritem>
    </tabber>
  </div>
</template>

<script>
import tabber from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
export default {
  name: "App",
  components: {
    tabber,
    tabbaritem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
