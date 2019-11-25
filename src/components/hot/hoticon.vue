<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 16:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="hoticon1">
        <div class="hoticon">
            <div class="hot1" v-for="(iconhot,index) in iconhots" :key="index">
                <img :src="iconhot.src" alt="">
                <div class="online">
                    <p>{{iconhot.name}}</p>
                    <p>{{iconhot.word}}</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <img src="../../assets/img/footer1.jpg" alt="">
        </div>
        <p class="hoticonp">没有更多内容了哦 ~ </p>
    </div>
</template>

<script>
export default {
  name: 'hoticon',
  data() {
    return {
        iconhots:[
            
        ]
    }
  },
  created(){
    fetch('/api/popular/index')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.iconhots = data;
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style>
.hoticon1{
    margin-bottom: 49px;
}
.hoticon{
    width: 95%;
    margin: 0 auto;
    clear: both;
    display: flex;
    flex-wrap: wrap;
}
.hot1{
    width: 48%;
    display: flex;
    height: .66rem;
    margin-bottom: 10px;
}
.hoticon img{
    width: .6rem;
    height: .6rem;
    border-radius: 15px;
}
.online p:nth-child(1){
    margin-top: 5px;
    margin-left: 10px;
}
.online p:nth-child(2){
    margin-top: 10px;
    color: #ccc;
    margin-left: 10px;
}
.footer{
    width: 95%;
    text-align: center;
    border-bottom:1px solid rgb(238, 234, 234);
    padding-bottom: 10px;
    margin: 0 auto .2rem  auto;
}
.footer img{
    width: 95%;
}
.hoticonp{
    width: 1.5rem;
    background-color: white;
    color: #ccc;
    text-align: center;
    margin-top: -30px;
    margin-left: 110px;
}
</style>
