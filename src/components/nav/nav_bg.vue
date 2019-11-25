<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-09 20:48:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="navbg">
        <slot name="navbgtop"></slot>
        <slot name="navbgbottom"></slot>
    </div>
</template>

<script>
export default {
  name: 'navbg',
  }

</script>

<style>
    .navbg{
        width: 100%;
        height: 1.5rem;
        background-color: #f33132;
    }
</style>
