<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-14 16:24:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="center">
    <div class="shaky">
      <div class="vip">
        <img src="../assets/img/vip.png" alt />
        <div class="concent">
          <p>会员中心</p>
          <p>会员福利天天领取</p>
        </div>
      </div>
      <div class="award">
        <img src="../assets/img/gift_center.png" alt />
        <div class="concent">
          <p>奖励中心</p>
          <p>消费返现享不停</p>
        </div>
      </div>
    </div>
    <h4>常用服务</h4>
    <div class="usual" id="app">
      <div class="usual-child" v-for="(obj,index) in objs" :key="index">
          <img :src="obj.src">
          <p>{{obj.wz}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
        objs:[
            {
                src:"../../static/img/service_mine.png",
                wz:"在线客服"
            },
            {
                src:"../../static/img/bill.png",
                wz:"我的订单"
            },
            {
                src:"../../static/img/invite.png",
                wz:"邀请好友"
            },
            {
                src:"../../static/img/help.png",
                wz:"帮助中心"
            },
            {
                src:"../../static/img/safe.png",
                wz:"安全中心"
            },
            {
                src:"../../static/img/cashier.png",
                wz:"我是收银员"
            },
            {
                src:"../../static/img/setting.png",
                wz:"设置"
            },
            {
                src:"../../static/img/more.png",
                wz:"更多服务"
            },
        ]
    };
  },
  methods: {}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  width: 100%;
  height:100%;
  border-radius: 15px 15px 0 0;
  margin-top: -0.3rem;
  background: white;
}
.shaky {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #c7c7c5;
}
.shaky img {
  width: 0.35rem;
  height: 0.35rem;
  float: left;
}
.concent {
  float: left;
  line-height: 0.18rem;
  padding-left: 0.15rem;
  font-size: 14px;
}
.concent p:nth-child(2) {
  color: #939393;
  font-size: 12px;
}
.center h4 {
  margin-top: 0.2rem;
  padding-left: 0.3rem;
}
.usual {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.usual img {
  width: 0.4rem;
}
.usual-child{
    width: 25%;
    font-size: 12px;
    text-align: center;
    margin: 10px 0;
}
</style>
