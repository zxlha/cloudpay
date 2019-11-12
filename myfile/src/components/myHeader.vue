<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-11 20:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="myHeader">
    <div class="red">
      <div class="photo">
        <img src="../assets/img/headerphoto.jpg" alt />
      </div>
      <div class="code">
        <p>176****2984</p>
        <p>{{msg}}</p>
      </div>
      <div class="right">
        <img src="../assets/img/share_left_back.png" alt />
      </div>
    </div>
    <div class="myHeader-bottom">
      <div class="packet packet-img">
        <img src="../assets/img/red_bage.png"  >
        <p>我的红包</p>
      </div>
      <div class="packet">
        <img src="../assets/img/follow.png" alt />
        <p>我的收藏</p>

      </div>
      <div class="packet">
        <img src="../assets/img/coupons.png" alt />
        <p>我的票卷</p>
      </div>
      <div class="packet">
        <img src="../assets/img/coin.png" alt />
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      msg: "加油"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myHeader {
  width: 100%;
  box-sizing: border-box;
  background-image: url(../assets/img/card_bag_item_background.png);
  background-position: center top;
}
.red {
  height: 100%;
  overflow: hidden;
  padding: 10px 0 0 0.2rem;
}
.photo {
  float: left;
}
.photo img {
  width: .5rem;
  border-radius: 50%;
}
.code {
  float: left;
  margin-top: 8px;
  padding-left: 10px;
  color: white;
}
.code :nth-child(1) {
  font-size: 14px;
  padding-bottom: 5px;
}
.code :nth-child(2) {
  font-size: 12px;
}
.right {
  float: right;
  margin-top: 0.2rem;
  box-sizing: border-box;
  padding-right: 0.2rem;
}
.right img {
  width: 0.15rem;
  height: 0.15rem;
}
.myHeader-bottom{
  display: flex;
  justify-content: space-around;
  margin-top: .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.packet {
  width: 25%;
  text-align: center;
}
.packet img{
  width: .4rem;
}
.packet p{
  line-height: .4rem;
  color: white;
}
.white {
  width: 100%;
  height: 3rem;
  border-radius: 0.2rem 0.2rem 0 0;
  /* margin-top: -.2rem; */
  clear: both;
}
</style>
