<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 11:03:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="cardnumberbox">
   <p><b>银行卡</b> 共{{counts}}张</p>
</div>     
</template>

<script>
export default {
    name:"cardnumber",
    data(){
        return{
          counts:[]
        } 
    },
    created(){
        fetch("/api/card/selectcount")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.counts=data;
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
}
</script>

<style>
    .cardnumberbox{
        width: 100%;
        height: 0.2rem;
        /* padding:0.1rem; */
    }
    p{
        font-size:0.16rem;
        color:gray;
    }
</style>