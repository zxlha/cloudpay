<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-16 09:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="phoneNum-inp">
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
   <p class="loginBut" @click="panduan">登录</p>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "phoneNum",
  data() {
    return {
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
        dizhi:"",
    };
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
            fetch('/api/user/login?tel='+this.shoujihao+'&pass='+this.mimaval,{
              method:"POST"
            })
			      	.then(res=>{
			       	 	return res.json();
			    	})
			      	.then(data=>{ 
                
                if(data==1){
                  Toast('欢迎您!');
                  window.localStorage.setItem('name',this.shoujihao);
                  this.$router.push('/mypage/')
                }else if(data==0){
                  Toast('登录失败!');
                }else{
                  console.log(data);
                  Toast('账号不存在!');
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phoneNum{
    width: 90%;
    margin: 0 auto;
    height: .53rem;
    position: relative;
    box-sizing: border-box;
    box-shadow:0px 0px 3px #ccc;
    border-radius: 15px;
    margin-top: .2rem;
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
    margin: .3rem auto 0 auto;
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
img{
    width: .25rem;
    position: absolute;
    left: 3rem;
    top: .14rem;
}
</style>
