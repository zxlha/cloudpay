<!--
 * @Author: 范钊
 * @Date: 2019-11-06 21:31:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 10:53:59
 * @Description: "转账"
 -->
<template>
<div class="box">
  <Aback>
    <b class="wenzi">提现</b>
  </Aback>
  <Tfangshi></Tfangshi>
</div>
</template>

<script>
import Aback from "../components/Aback"
import Tfangshi from "../components/Tfangshi"

export default {  
    name:"Tixian",
    data(){
        return{
           
        }
    },
    components:{
      Aback,Tfangshi
    }
}
</script>

<style scoped>
 .wenzi{
   margin-left:1.3rem;
   display: inline-block;
   font-size: 0.2rem;
 }
 .Rtext{
        font-style: normal;
    }
</style>