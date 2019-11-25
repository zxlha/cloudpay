<!--
 * @Author: 范钊
 * @Date: 2019-11-11 14:34:06
 * @LastEditors: 范钊
 * @LastEditTime: 2019-11-12 17:42:30
 * @Description: +
 -->
<template>
    <div class="Ranniubox">
       <slot class="Ranniu"></slot>
    </div>
</template>

<script>
export default {
    name:"Ranniu",
    data(){
        return{
          
        }
    }
}
</script>

<style scoped>
 .Ranniubox{
    width: 100%;
    height: 0.5rem;
    margin-top:0.6rem;
 }
 .Ranniu{
        display: block;
        width: 1.2rem;
        height: 0.4rem;
        font-size: 0.2rem;
        border-radius: 14px;
        background: #F0252B;
        color:white;
        border:none;
        outline: none;
        margin: 0 auto;
    }
</style>