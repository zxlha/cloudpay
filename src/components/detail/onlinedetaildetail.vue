<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-14 21:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
<div class="rich">
  <onlinedetailcc :id="id"></onlinedetailcc>
  <onlineshopdetailcc :id="id"></onlineshopdetailcc>
  <detaildt :id="id"></detaildt>
</div>
</template>

<script>
import onlinedetailcc from './onlinedetailcc';
import onlineshopdetailcc from './onlineshopdetailcc';
import detaildt from './detaildt'
export default {
  name: 'rich',
  props:['id'],
  components:{
    onlinedetailcc,onlineshopdetailcc,detaildt
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