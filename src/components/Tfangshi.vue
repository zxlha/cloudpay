<!--
 * @Author: 范钊
 * @Date: 2019-11-11 14:34:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 10:55:52
 * @Description: +
 -->
<template>
    <div class="Rfangshibox">
        <p class="Rtishi">{{tishi.info}}</p>
        <div class="fangshi">
            到账银行卡
             <select class="xuanze"  v-model="selected">
                 <option value="—请选择银行卡—" selected >—请选择银行卡—</option>
                 <option  v-for="(card,index) in cards" :key="index">
                     {{card.cardname}}({{card.idsi}}){{(card.number)}}
                </option>
             </select>
        </div>
        <div class="fangshi">
            &nbsp; &nbsp; ￥<input type="number" v-model="jine" class="chongmoney" placeholder="请输入金额">
        </div>
        <div class="fangshi">
            密&nbsp;&nbsp;&nbsp;码
            <input type="password" v-model="vmodelmima" class="mima" placeholder="请输入密码">
        </div>
        <!-- <router-link to="/Jrecord"> -->
            <input type="button" class="Ranniu" value="提现" @click="ceshi">
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    name:"Rfangshi",
    data(){
        return{
            cards:[],
            card:"",
            selected:'',
            vmodelmima:"",
            jine:"",
            tishi:""
        }
    },
    created(){
        fetch("/api/card/select")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.cards=data;
        })
        .catch(err=>{
            console.log(err);
        })
        
    },
    methods:{
        ceshi(){
            let str=this.selected;
            
            let str1=str.slice(10);
            let str2=str.slice(0,10);

            console.log(str);//全部
            console.log(str1);//银行卡号
            console.log(str2);//eg:工商银行（2556）
              
            fetch('/api/card/cash?number='+str1+'&si='+str2+'&paypass='+this.vmodelmima+'&balance='+this.jine,{
                method:"POST"
            })
            console.log('/api/cardselect?number='+str1+'&si='+str2+'&paypass='+this.vmodelmima+'&balance='+this.jine,)
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                this.tishi=data;
                console.log(data)
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
   
}
</script>

<style scoped>
     .Rfangshibox{
         width: 100%;
         height: 2rem;
         font-size: 0.2rem;
         margin-top: 1rem;
     }
     .Rtishi{
         width: 100%;
         font-size: 0.16rem;
         color: red;
         text-align: center;
     }
     .fangshi{
         width: 3.5rem;
         height: 0.5rem;
         background: white;
         margin:0.3rem auto;
         border-radius: 14px;
         line-height: 0.5rem;
         font-size: 0.2rem;
         box-sizing: border-box;
     }
     .xuanze{
         width: 2rem;
         height: 0.3rem;
         border: none;
         border-radius: 14px;
         font-size: 0.2rem;
         outline: none;
         margin-left: 0.1rem;
         background: white;
     }
     option{
         font-size: 0.1rem;
     }
    .chongmoney{
        width: 2.3rem;
        height: 0.4rem;
        border-top:none;
        border-left:none;
        border-right:none;
        border-bottom: 2px solid black;
        outline: none;
        font-size: 0.2rem;
        margin-left: 0.3rem;
     }
     .mima{
          width: 2.3rem;
        height: 0.4rem;
        border:none;
        outline: none;
        font-size: 0.2rem;
        margin-left: 0.3rem;
     }
     .Ranniu{
        display: block;
        width: 1.2rem;
        height: 0.4rem;
        font-size: 0.2rem;
        border-radius: 14px;
        background: #F0252B;
        color:white;
        border:none;
        outline: none;
        margin: 0 auto;
    }
</style>