<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 00:20:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="top">
    <div class="cardHeaderTop">
        <div class="expenditure">
            本月支出
            <span class="iconfont icon-yanjing"  v-show="eyes" @click="yanjing()"></span>
            <span class="iconfont icon-yanjing1" v-show="!eyes" @click="yanjing()"></span>
        </div>
        <div class="user">
            <span class="iconfont icon-user-copy" @click="jiapingage"></span>
        </div>
        <div class="moneynumber"  v-show="eyes" ref="tipId">{{tip.money}}</div>
        <router-link to="/Jrecord">
            <p class="record">交易记录</p>
        </router-link>
    </div>     
</div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Cardheader",
    data(){
        return{
           tip:"",
           eyes:true
        } 
    },
    methods:{
        yanjing(){
            this.eyes=!this.eyes
            // if(this.eyes==false){
            //     this.$refs.tipId.innerHTML="****"
            // }else if(this.eyes==true){
            //     this.$refs.tipId.innerHTML=this.tip;
            // }  
        },
        jiapingage(){
            this.$router.push('/personalSettings/')
        }
    },
    created(){
        fetch("/api/selectmoney")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.tip=data[0];
        })
        .catch(err=>{
            console.log(err)
        })
    //     axios.get("/user/login?tel='00000000000'&pass='000000'")
    //     .then(res=>{
    //     this.tip=data.info;
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    }
}
</script>

<style>
    .cardHeaderTop{
        width: 100%;
        height: 1.6rem;
        background:#F0252B;
        /* padding:0.1rem; */
        box-sizing: border-box;
        position: relative;
    }
    .expenditure{
        width: 1.5rem;
        height: 0.4rem;
        font-size: 0.18rem;
        float: left;
        display: flex;
        align-items: center;
    }
    .user{
        width: 0.4rem;
        height: 0.4rem;
        float: right;
        margin-top: 10px;
    }
    .icon-user-copy{
        font-size: 0.2rem;
        display: block;
        font-weight: bold;
    }
    .moneynumber{
        font-size: 0.2rem;
        clear: both;
        /* padding-top:0.1rem; */
    }
    .record{
        width: 1rem;
        height: 0.3rem;
        font-size: 0.2rem;
        background: white;
        color: #F0252B;
        text-align: center;
        line-height: 0.3rem;
        border-radius:12px;
        position: absolute;
        bottom:0.2rem;
        right: 0.2rem;
    }
    .icon-yanjing{
        font-size: 0.38rem;
        margin-left: 5px;
    }
    .icon-yanjing1{
        margin-left: 5px;
        font-size: 0.25rem;
    }

</style>