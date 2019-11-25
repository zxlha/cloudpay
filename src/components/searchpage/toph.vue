<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-14 18:25:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="nav2">
        <p class="navi_city2">西安市</p>
        <input class="navi_search2" type="text" placeholder="品牌，门店，商品，应用" @click="searchdpaged">
        <i class="el-icon-search" id="navi_ss2"></i>
        <i class="el-icon-sunset" id="navi_aa2"></i>
    </div>
</template>

<script>
export default {
  name: 'toph',
  data() {
    return {
    }
  },
  methods:{
    searchdpaged(){
      this.$router.push('/searchdpage/')
    }
  }
}
</script>

<style>
    .navi_city2{
      text-indent: .1rem;
      color: black;
      font-size: 16px;
    }
    .nav2{
      display: flex;
      align-items: center;
      height: 60px;
      justify-content: space-between;
    }
    .navi_search2{
      width: 230px;
      height: 35px;
      border-radius: 5px;
      border: 1px solid rgb(180, 176, 176);
      outline: none;
      text-indent: 40px;
      background: rgb(243, 241, 241);
    }
    #navi_ss2{
      position: absolute;
      left:.9rem;
    }
    #navi_aa2{
      margin-right: .1rem;
      color: black;
    }
</style>
