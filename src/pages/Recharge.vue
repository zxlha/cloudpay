<!--
 * @Author: 范钊
 * @Date: 2019-11-06 21:31:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 10:58:05
 * @Description: "交易记录"
 -->
<template>
    <div class="Rechargebox">
        <Aback>
            <b class="wenzi">充值</b>
        </Aback>
        <Jyheader></Jyheader>
        <Rchongzhi></Rchongzhi>
    </div>
</template>

<script>
import Aback from "../components/Aback"
import Rchongzhi from "../components/Rchongzhi"
export default {  
    name:"Recharge",
    data(){
        return{
           
        }
    },
    components:{
     Aback,Rchongzhi
    }
}
</script>

<style scoped>
    .wenzi{
        display: inline-block;
        font-size: 0.2rem;
        margin-left: 1.4rem;  
    }
    .Rtext{
        font-style: normal;
    }
</style>