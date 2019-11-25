<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-13 21:41:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="quit" @click="back()">
      <!--退出按钮-->
      <i class="err"><img src="../assets/img/icon_title_cancel.png"></i>
  </div>
</template>

<script>
export default {
    name:'quit',
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
    .quit{
        text-align: center;
        padding: 10px 10px 0 0;
    }
    .err{
        display: block;
        text-align: left;
    }
    .err img{
        width: .25rem;
        height: .25rem;
    }
   
</style>
