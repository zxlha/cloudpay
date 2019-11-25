<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-10 13:20:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="icon">
        <a href="#"><img src="../../assets/img/pay1.jpg" alt=""><span>付款码</span></a>
		<a href="#"><img src="../../assets/img/getpay.jpg" alt=""><span>收付款</span></a>
		<a href="#"><img src="../../assets/img/sweep.jpg" alt=""><span>扫一扫</span></a>
		<a href="#"><img src="../../assets/img/cardmange.jpg" alt=""><span>卡管理</span></a>
    </div>
</template>

<script>
export default {
  name: 'icon',
  data() {
    return {
    }
  }
}
</script>

<style>
.icon{
    width: 100%;
    height:.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
}
.icon img{
	width: .5rem;
    height:.5rem;
    border-radius: 50%;
}
.icon span{
	font-size:.14rem;
	display: block;
    text-align: center;
    margin-top: .05rem;
}
.icon a{
    color: white;
    text-decoration: none;
}
</style>
