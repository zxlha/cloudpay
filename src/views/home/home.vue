<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-11 09:38:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
  <div>
    <navbg>
      <navi slot="navbgtop"></navi>
      <icon slot="navbgbottom"></icon>
    </navbg>
    <functions></functions>
    <banner></banner>
    <hot></hot>
    <hoticon></hoticon>
  </div>
</template>

<script>

import navbg from "../../components/nav/nav_bg"
import navi from "../../components/nav/navi";
import icon from "../../components/nav/icon";
import functions from "../../components/functions/functions";
import banner from "../../components/banner/banner";
import hot from "../../components/hot/hot";
import hoticon from "../../components/hot/hoticon"
export default {
  name: 'home',
  components: {
    navi,navbg,icon,functions,banner,hot,hoticon
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
}
</style>
