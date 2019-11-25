<!--
 * @Author: 范钊
 * @Date: 2019-11-11 14:34:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-15 22:21:28
 * @Description: 
 -->
<template>
    <div class="Zinputbox">
        <p class="zztishi">{{tishi.info}}</p>
        <div class="phone">
            手机号<input class="phoneinput" v-model="Zshoujihao" type="text" placeholder="请输入被转账人的手机号">
        </div>
        <div class="phone">
            转账金额<input class="phoneinput" v-model="Zjine" type="number" placeholder="请输入转账人金额">
        </div>
        <div class="phone">
            支付密码<input class="phoneinput" v-model="Zmima" type="password" placeholder="请输入支付密码" maxlength="6">
        </div>
        <!-- <router-link to="/Jrecord"> -->
            <input class="qrzz" type="button" value="转账" @click="showToast"> 
        <!-- </router-link> -->
    </div>
</template>

<script>
// import { MessageBox } from 'mint-ui';

export default {
    name:"Zinput",
    data(){
        return{
            Zshoujihao:"",
            Zjine:"",
            Zmima:"",
            tishi:""
        }
    },
    methods:{ 
        showToast(){ 
        // MessageBox.prompt('请输入密码').then(({ value, action }) => {
        //         inputType:'password';
        //     });
              fetch('/api/user/transfer?tel2='+this.Zshoujihao+'&balance='+this.Zjine+'&paypass='+this.Zmima,{
                    method:"POST"
                })
                // console.log('/api/cardselect?tel2='+this.Zshoujihao+'&balance='+this.Zjine+'&paypass='+this.Zmima,)
                .then(res=>{
                    return res.json();
                })
                .then(data=>{
                    this.tishi=data;
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
}
    
</script>

<style scoped>
    .Zinputbox{
        width: 100%;
        margin-top:0.3rem;
    }
    .zztishi{
        font-size: 0.2rem;
        color: #F0252B;
        text-align: center;
    }
    .phone{
        width:3.4rem;
        height: 0.4rem;
        font-size:0.2rem;
        border-radius: 14px;
        background: white;
        margin: 0 auto;
        margin-top:0.3rem;
    }
    .phoneinput{
        width: 2rem;
        height: 0.4rem;
        border:none;
        border-radius: 14px;
        font-size: 0.2rem;
        margin-left: 0.15rem;
        outline: none;
    }
    .qrzz{
        display: block;
        width: 1.2rem;
        height: 0.4rem;
        background: #F0252B;
        border-radius: 14px;
        border: none;
        outline: none;
        color: white;
        font-size: 0.2rem;
        margin: 0.3rem auto;
    }
        
</style>