<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 00:18:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="Cardiconbox">
    <div class="yuan">
        <router-link to="/Zhuanzhang">
            <span class="iconfont icon-zhuanzhang1"></span>
            <span class="wenzi">转账</span>
       </router-link>
    </div>
    <div class="yuan">
        <router-link to="/Recharge">
            <span class="iconfont icon-chongzhi"></span>
            <span class="wenzi">充值</span>
        </router-link>
    </div>
    <div class="yuan">
        <router-link to="/Tixian">
            <span class="iconfont icon-money-"></span>
            <span class="wenzi">提现</span>
       </router-link>
    </div>
</div>     
</template>

<script>
export default {
    name:"Cardiconbox",
    data(){
        return{
          
        } 
    }
    
}
</script>

<style>
    .Cardiconbox{
        width: 100%;
        height: 1rem;
        background:#FFFFFF;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
    }
    .yuan{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background:#FEEDEB;
        /* margin-top:0.15rem; */
    }
   .icon-zhuanzhang1,.icon-chongzhi,.icon-money-{
        text-align: center;
        line-height: 0.6rem;
        display: block;
        font-size: 0.4rem;
        color:#FD787B;
        }
    .wenzi{
        font-size: 10px;
        display: block;
        font-weight: bolder;
        text-align: center;
    }
</style>