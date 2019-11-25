<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-14 21:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
<div class="rich">
  <detailcc :id="id"></detailcc>
  <shopdetailcc :id="id"></shopdetailcc>
  <detaildt :id="id"></detaildt>
</div>
</template>

<script>
import detailcc from './detailcc';
import shopdetailcc from './shopdetailcc';
import detaildt from './detaildt'
export default {
  name: 'rich',
  props:['id'],
  components:{
    detailcc,shopdetailcc,detaildt
  },
  mounted(){
    console.log("hhhh"+this.id)
  }
}
</script>

<style>
body{
  background: #f0efef;
}
.rich{
  margin-bottom: 55px;
}
</style>