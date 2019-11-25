<!--
 * @Author: 范钊
 * @Date: 2019-11-06 21:31:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-15 21:53:07
 * @Description: "卡管理"
 -->
<template>
  <div class="box">
    <Cardheader></Cardheader>
    <Cardicon></Cardicon>
    <cardnumber></cardnumber>
    <Cardmodel></Cardmodel>
    <addcard></addcard>
  </div>
</template>

<script>
import Cardheader from "../components/Cardheader"
import Cardicon from "../components/Cardicon"
import cardnumber from "../components/cardnumber"
import Cardmodel from "../components/Cardmodel"
import addcard from "../components/addcard"
export default {
    name:"Cardmanagement",
    data(){
        return{
           
        }
    },
    components:{
        Cardheader,Cardicon,cardnumber,Cardmodel,addcard
    }
}
</script>

<style scoped>

</style>