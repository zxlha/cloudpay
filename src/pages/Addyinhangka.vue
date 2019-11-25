<!--
 * @Author: 范钊
 * @Date: 2019-11-06 21:31:30
 * @LastEditors: 范钊
 * @LastEditTime: 2019-11-11 21:56:46
 * @Description: "添加银行卡"
 -->
<template>
  <div class="Zbackbox">
    <Aback>
      <b class="wenzi">添加银行卡</b>
    </Aback>
    <Acard></Acard>
    <Acardinput></Acardinput>
  </div>
</template>

<script>
import Aback from "../components/Aback"
import Acard from "../components/Acard"
import Acardinput from "../components/Acardinput"
export default {
    name:"Addyinhangka",
    data(){
        return{
           
        }
    },
    components:{
        Aback,Acard,Acardinput
    }
}
</script>

<style scoped>
 .wenzi{
   display: inline-block;
   margin-left: 1rem;
   font-size: .2rem;
 }
</style>