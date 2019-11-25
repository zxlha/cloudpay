<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-11 14:30:21
 * @LastEditors: 范钊
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="back">
   <span class="iconfont icon-fanhui" @click="back()"></span>
   <slot class="wenzi"></slot>
</div>     
</template>

<script>
export default {
    name:"Aback",
    data(){
        return{
        } 
    },
    methods:{
        back(){
           this.$router.go(-1) 
        }  
    }
    
}
</script>

<style>
   .back{
       width: 100%;
       height: 0.4rem;
       font-size: 0.2rem;
       font-weight: bold;
   }
   .icon-fanhui{
       display:inline-block;
       font-size: 0.2rem;
       margin-left: 0.1rem;
       margin-top: 0.1rem;
   }
</style>