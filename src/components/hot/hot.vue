<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-11 10:31:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="hot">
        <p class="hot_tui hot_tui1">热门推荐</p>
        <p class="hot_tui hot_tui2">更多 ></p>
    </div>
</template>

<script>
export default {
  name: 'hot',
  data() {
    return {
    }
  }
}
</script>

<style>
.hot_tui{
    float: left;
}
.hot_tui1{
    margin-left: .1rem;
    font-size: 16px;
}
.hot_tui2{
    margin-left: 2.4rem;
    font-size: 14px;
    color: rgb(165, 161, 161)
}
</style>
