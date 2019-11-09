<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-09 10:01:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div id="tab-bar">
     <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right:0;
  bottom:0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1)
}

</style>
