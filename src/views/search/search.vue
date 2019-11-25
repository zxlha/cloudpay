<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-14 17:00:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
<div>
  <toph></toph>
  <local></local>
  <router-view></router-view>
</div>
</template>

<script>
import toph from '../../components/searchpage/toph';
import local from '../../components/searchpage/local';
import get from '../../components/searchpage/get'
export default {
  name: 'search',
  components: {
    toph,local,get
  },
  methods:{
  }
}
</script>

<style>

</style>