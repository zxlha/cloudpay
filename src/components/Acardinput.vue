<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 08:33:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="cardkuang">
    <p class="Rtishi">{{tishi.info}}</p>
  <div class="cardinput">
      真实姓名
      <input class="kuang" v-model="xinming" type="text" placeholder="请输入真实姓名">
  </div>
  <div class="cardinput">
      身份证号
      <input class="kuang" v-model="shenfenzheng" type="text" placeholder="请输入身份证号">
  </div>
  <div class="cardinput">
      银行卡号
      <input class="kuang" v-model="yinhangka" type="text" placeholder="请输入银行卡号">
  </div>
    <div class="cardinput">
        密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码
        <input class="kuang" v-model="Bmima" type="password" placeholder="请输入银行卡号">
    </div>
  <p class="tishi">
      请添加您本人的银行卡，享受便捷的银联服务
  </p>
  <!-- <router-link to="/Cardmanagement"> -->
    <input class="next" type="button" value="立即添卡" @click="showToast">
  <!-- </router-link> -->
</div>     
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    name:"Acardinput",
    data(){
        return{
            xinming:"",
            shenfenzheng:"",
            yinhangka:"",
            Bmima:"",
            tishi:""
        } 
    },
    methods:{ 
    showToast(){ 
    // MessageBox.prompt('请输入密码').then(({ value, action }) => {
    //         inputType:'password';
    //     });

        fetch('/api/card/addcard?number='+this.yinhangka+'&realname='+this.xinming+'&idnumber='+this.shenfenzheng+'&paypass='+this.Bmima,{
                method:"POST"
            })
            // console.log('/api/cardselect?number='+this.yinhangka+'&realname='+this.xinming+'&idnumber='+this.shenfenzheng+'&paypass='+this.Bmima,)
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

<style>
   .cardkuang{
       width: 100%;
       height: 100%;
       padding-top:0.1rem;
   }
    .Rtishi{
         width: 100%;
         font-size: 0.16rem;
         color: red;
         text-align: center;
     }
   .cardinput{
       width: 90%;
       height: 0.4rem;
       font-size: 0.2rem;
       display: flex;
       align-items: center;
       margin-top:0.2rem;
       margin-left: 0.18rem;
       border-radius: 14px;
       background: white;
   }
   .kuang{
       width: 2.4rem;
       height: 0.35rem;
       font-size: 0.15rem;
       outline: none;
       border: none;
       margin-left: 0.1rem;   
       }
   .tishi{
      font-size: 0.12rem;
      color: gray;
      margin-top:0.1rem;
      margin-left: 0.18rem;
   }
   .next{
       width: 1.2rem;
       height: 0.4rem;
       font-size: 0.2rem;
       color:white;
       background:#F0252B;
       outline: none;
       border: none; 
       border-radius: 14px;
       display: block;
       margin:0 auto;
       margin-top:0.3rem;
   }
   
</style>