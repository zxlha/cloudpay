<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-15 19:30:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="myArrow" @click="back()">
      <!--左箭头-->
      <img src="../assets/img/sy_sdk_left.png">
  </div>
</template>

<script>
export default {
    name:'myArrow',
    data(){
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .myArrow{
        width: 10%;
        height: .25rem;
    }
    img{
        width: .25rem;
        height: .25rem;
    }
</style>
