<!--
 * @Author: 范钊
 * @Date: 2019-11-06 21:31:30
 * @LastEditors: 范钊
 * @LastEditTime: 2019-11-13 14:27:46
 * @Description: "交易记录"
 -->
<template>
    <div class="Jrecordbox" @click="changeYearShow()">
        <Aback>
            <b class="wenzi">交易记录</b>
        </Aback>
        <Jyheader @changeshow="changeshow()" :isshowyear="isShowYear" ></Jyheader>
        <Jyjilu></Jyjilu>
    </div>
</template>
<script>
import Aback from "../components/Aback"
import Jyheader from "../components/Jyheader"
import Jyjilu from "../components/Jyjilu"
export default {  
    name:"Jrecord",
    data(){
        return{
           isShowYear:false
        }
    },
    components:{
     Aback,Jyheader,Jyjilu
    },
    methods:{
        changeYearShow(){
            this.isShowYear = false;
        },
        changeshow(){
            this.isShowYear = !this.isShowYear;
        }
    }
}
</script>

<style scoped>
    .wenzi{
        display: inline-block;
        font-size: 0.2rem;
        margin-left: 1.2rem;  
    }
</style>