<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-15 23:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <div class="login-header">
        <myArrow></myArrow>
        <p class="msgcode">{{ord}}</p>
      </div>
       <div class="phoneNum">
        <span>+86</span>
        <input type="text" v-model="shoujihao" class="tel" placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="password">
        <span>密码</span>
        <input :type="pwdType"  v-model="mimaval"  class="tel"  @on-change="userPassword"  placeholder="登录密码" maxlength="16">
        <img  v-show="eyes" @click="dainji()" :src="seen?nopeneye:openeye" >
        <p style="color:red">{{msg}}</p>
      </div>
      <i id="icon"><img src="../assets/img/radio_selected.png" alt=""></i>
      <p class="treaty">我已阅读并同意<span>《银联用户服务协议》、《隐私政策》</span></p>
      <router-link v-bind:to='dizhi'><p class="loginBut" @click="panduan">注册</p></router-link>
      
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import myArrow from '../components/myArrow';
  export default {
    name:'register',
    data(){
        return{
          ord:"手机号注册",
          input:'',
          seen:'',
          openeye: require('../assets/img/card_bag_close_eye.png'),
          nopeneye:require('../assets/img/card_bag_open_eye.png'),
          pwdType: 'password',
          userPassword:"",
          eyes:true,
          shoujihao:"",
          mimaval:"",
          msg:"",
          dizhi:""
        }
    },
    methods: {
    dainji(){
            this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
            this.seen = !this.seen;
        },
    panduan:function(){
      console.log(this.shoujihao);
      var r=/^1(3|4|5|7|8)\d{9}$/;
      if(this.shoujihao.length==0 || this.mimaval.length==0){
        this.msg="手机号或密码不能为空！";
        this.dizhi="";
      }else if(r.test(this.shoujihao)){
        fetch('/api/user/register?tel='+this.shoujihao+'&pass='+this.mimaval,{
          method:"POST"
        })
          .then(res=>{
            return res.json();
          })
          .then(data=>{
            console.log(data);
            if(data==1){
              Toast('欢迎您!');
              this.$router.push('/login/')
              // this.$router.push({
              //   path:"login"
              // })
            }else if(data==0){
              Toast('注册失败!');
            }else{
              Toast('账号已注册!');
            }
            
          })
          .catch(err=>{
            console.log(err);
          })
          }else{
            this.msg="手机号或密码格式不正确！";
            this.dizhi="";
          }
      }
    },
    components:{
        myArrow
    }
  };
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    
  }
  html{
    font-size:26.67vw;
  }
  body{
    font-size: 14px;
    height: 100%;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .login-header{
    height: .5rem;
  }
  .myArrow{
    margin:10px 0 0 5px;
    float: left;
    height: .4rem;
  }
  .msgcode{
    margin-top: 10px;
    font-size: .18rem;
    text-align: center;
    width: 85%;
    float: right;
    line-height: .28rem;
    padding-right: .45rem;
    box-sizing: border-box;
  }
  .treaty{
    font-size: 12px;
    float: left;
    margin: .3rem 0 .2rem 10px;
  }
  .treaty span{
    color: blue;
  }
  #icon{
    display: block;
    margin:.35rem .1rem 0 .2rem;
    float: left;
    
  }
  
  .phoneNum{
    width: 90%;
    margin: .2rem auto 0 auto;
    height: .53rem;
    position: relative;
    box-sizing: border-box;
    box-shadow:0px 0px 3px #ccc;
    border-radius: 15px;
}
.phoneNum span{
    padding: 0 .16rem 0 .25rem;
    border-right: 1px solid #ccc;
    font-size: .16rem;
}
.tel{
    padding-top: 1px;
    height: .5rem;
    border-radius: .1rem;
    border: none;
    outline: 0;
    padding-left: .15rem;
    box-sizing: border-box;
    font-size: .16rem;
}
.loginBut{
    width: 1.2rem;
    height: .4rem;
    border-radius: 10px;
    background: red;
    margin: .7rem auto 0 auto;
    text-align: center;
    line-height: .4rem;
    font-size: .16rem;
    color: white;
}
.password{
    width: 90%;
    margin: 0 auto;
    height: .5rem;
    position: relative;
    box-sizing: border-box;
    box-shadow:0px 0px 3px #ccc;
    border-radius: 15px;
    margin-top: .2rem;
}
.password span{
    padding: 0 .1rem 0 .25rem;
    font-size: .16rem;
}
.tel{
    padding-top: 1px;
    height: .5rem;
    border-radius: .1rem;
    border: none;
    outline: 0;
    padding-left: .14rem;
    box-sizing: border-box;
    font-size: .16rem;
}
.password img{
    width: .25rem;
    position: absolute;
    left: 3rem;
    top: .14rem;
}
#icon img{
    width: .15rem;
    position: absolute;
    top: 2.24rem;
}
</style>
