<!--
 * @Author: 范钊
 * @Date: 2019-11-06 21:31:30
 * @LastEditors: 范钊
 * @LastEditTime: 2019-11-12 14:22:38
 * @Description: "转账"
 -->
<template>
<div class="box">
  <Aback>
   <b class="wenzi">转账</b>
 </Aback>
 <Zinput></Zinput>
 <Ztishi></Ztishi>
</div>
</template>

<script>
import Aback from "../components/Aback"
import Zinput from "../components/Zinput"
import Ztishi from "../components/Ztishi"
export default {  
    name:"Zhuanzhang",
    data(){
        return{
           
        }
    },
    components:{
      Aback,Zinput,Ztishi
    }
}
</script>

<style scoped>
 .wenzi{
   margin-left:1.3rem;
   display: inline-block;
   font-size: 0.2rem;
 }
</style>