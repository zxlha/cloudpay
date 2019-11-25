<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-14 16:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="pass">
    <!--支付密码输入框-->
    <div class="password">
        <span>密码</span>
        <input :type="pwdType"  class="tel tel-two"  @on-change="userPassword"  placeholder="支付密码" maxlength="6">
        <img  v-show="eyes" @click="dainji()" :src="seen?openeye:nopeneye" >
    </div>
    <div class="password">
        <span>再次输入</span>
        <input :type="pwdType"  class="tel "  @on-change="userPassword"  placeholder="请确认支付密码" maxlength="6">
    </div>
    
  </div>
  

</template>
<script>
export default {
  name: "password",
  data() {
    return {
        input:'',
        seen:'',
        openeye: require('../assets/img/card_bag_close_eye.png'),
        nopeneye:require('../assets/img/card_bag_open_eye.png'),
        pwdType: 'password',
        userPassword:"",
        eyes:true
    };
  },
  methods: {
    phoneNum() {},
    dainji(){
            this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
            this.seen = !this.seen;
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pass{
    width: 95%;
    margin: .3rem auto;
}
.password{
    width: 100%;
    margin: .3rem auto;
    height: .5rem;
    position: relative;
    box-sizing: border-box;
    box-shadow:0px 0px 3px #ccc;
    border-radius: 15px;
    margin-top: .2rem;
}
.password span{
    padding: 0 .1rem 0 .2rem;
    font-size: .14rem;
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
.tel-two{
    margin-left: .28rem;

}
img{
    width: .25rem;
    position: absolute;
    left: 3.2rem;
    top: .14rem;
}
</style>
