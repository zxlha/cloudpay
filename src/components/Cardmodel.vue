<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 10:04:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="cardmodelbox">
   <div class="card" v-for="(data,index) in datas" :key="index">
       <p class="cardtype">{{data.cardname}}</p>
       <p class="cardid">{{klx}} {{"***********"+data.idsi}}</p>
   </div>
</div>     
</template>

<script>
export default {
    name:"cardmodelbox",
    data(){
        return{
          yhm:"",
          klx:"储蓄卡",
          kid:"",
          datas:[]
        } 
    },
    created(){
        fetch("/api/card/select")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.datas=data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
}
</script>

<style>
    .cardmodelbox{
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding:0.1rem;
    }
    .card{
        width: 96%;
        height:2rem;
        background:url(../assets/img/card.png) center;
        background-size: 100% 100%;
        margin:0 auto;
        border-radius: 14px;
        margin: 0.1rem;
        }
    .cardtype{
        padding-top:0.15rem;
        padding-left:0.1rem;
        color:white;
        font-size: 0.3rem;
    }
    .cardid{
        font-size: 0.18rem;
        color:white;
        margin-top:1rem;
        padding-left: 0.1rem;
    }
   
</style>