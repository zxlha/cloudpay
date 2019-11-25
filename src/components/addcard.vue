<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 10:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="addcardbox">
    <div class="addcard">
       <p class="addcardtype">{{yhm}}</p>
       <p class="addcardid">{{klx}} {{kid}}</p>
       <router-link to="/Addyinhangka">
            <input class="ljtd" type="button" value="立即添卡">
       </router-link>
      
   </div>  
</div>     
</template>

<script>
export default {
    name:"addcard",
    data(){
        return{
          yhm:"",
          klx:"",
          kid:""
        } 
    }
    
}
</script>

<style>
    .addcardbox{
        width: 100%;
        height: 2.5rem;
        background:#F5F5F5;
        box-sizing: border-box;
        padding:0.1rem;
    }
    .addcard{
        width: 96%;
        height:2rem;
        background:url(../assets/img/card.png) center;
        background-size: 100% 100%;
        margin:0 auto;
        margin-top: 0.1rem;
        position: relative;
        border-radius: 14px;
        }
    .addcardtype{
        padding-top:0.15rem;
        padding-left:0.1rem;
        color:white;
        font-size: 0.3rem;
    }
    .addcardid{
        font-size: 0.2rem;
        color:white;
        margin-top:1rem;
        padding-left: 0.1rem;
    }
    .ljtd{
        width: 1.5rem;
        height: 0.4rem;
        background: #F0252B;
        outline:none;
        color:white;
        position: absolute;
        bottom:0.1rem;
        left:1rem;
        font-size: 0.25rem;
        border-radius: 14px;
        border:none;
    }
   
</style>