<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 10:20:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="local">
      <div class="localtop">
        <p><router-link to='/search/get' class="cheaplocal" id="localj1">本地优惠</router-link></p>
        <p @click="onlinecheapss" id="localj2">线上优惠</p>
        <p>附近门店 > </p>
      </div>
      <div class="localnav">
        <a href="#">
          <img src="../../assets/img/local1.jpg" alt="">
          <span>全部</span>
        </a>
        <a href="#">
          <i class="el-icon-tableware"></i>
          <span>美食</span>
        </a>
        <a href="#">
          <i class="el-icon-shopping-cart-full"></i>
          <span>购物</span>
        </a>
        <a href="#">
          <i class="el-icon-orange"></i>
          <span>娱乐</span>
        </a>
        <a href="#">
          <i class="el-icon-position"></i>
          <span>旅行</span>
        </a>
        <a href="#">
          <i class="el-icon-medal"></i>
          <span>服务</span>
        </a>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'local',
  data() {
    return {
    }
  },
  methods:{
    onlinecheapss(){
      this.$router.push({path:'/search/online'});
    }
  }
}

$(function(){
  $("#localj1").click(function(){
    $("#localj1").css({
      fontWeight:"900",
      color:"black",
      borderBottom:"2px solid #000"
    })
    $("#localj2").css({
      fontWeight:"200",
      borderBottom:"none"
    })
  })

  $("#localj2").click(function(){
    $("#localj2").css({
      color:"black",
      fontWeight:"900",
      borderBottom:"2px solid #000"
    })
    $("#localj1").css({
      fontWeight:"200",
      borderBottom:"none"
    })
  })
})
</script>

<style>
.localtop{
  display: flex;
  margin-bottom: 10px;
}
.local p:nth-child(1){
  margin-left: 10px;
}
.local p:nth-child(2){
  margin-left: 20px;
  font-size: 14px;
  color: #ccc;
}
.local p:nth-child(3){
  margin-left: 1.3rem;
}
.localnav{
  width: 100%;
	height: .38rem;
	display: -webkit-flex;
	align-items: center;
	justify-content:space-between;
	overflow-x: auto;
}
.localnav a{
  text-decoration: none;
	color: #999999;
	display: block;
	white-space: nowrap;
	flex-shrink: 0;
	margin: 0 .1rem;
	font-size: .12rem;
}
.localnav img{
  width: 20px;
  height: 20px;
}
#localj1{
  color: black;
  font-weight: 900;
  text-decoration: none;
  border-bottom: 2px solid #000;
}
</style>
