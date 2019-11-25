<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 19:38:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="detaildt">
        <div class="detaildttop" v-for="(booksds,index) in detaildts" :key="index">
            <div class="detaildttopimg" v-for="(list,index) in booksds.yhlist" :key="index">
                <img :src="booksds.yhlist[0].img" alt="">
            </div>
            <div class="detaildttopp1dd">
                <p class="detaildttopp1">{{booksds.yhlist[0].word}}</p>
            </div>
            <div class="detaildttopp1dww">
                <p class="detaildttopp2">{{booksds.yhlist[0].num}}</p>
            </div>
        </div>
        <p class="getshare">无须获取，直接立享</p>
    </div>
</template>

<script>
export default {
  name: 'detaildt',
  props:["id"],
  data() {
    return {
        detaildts:[

        ]
    }
  },
  created(){
    fetch('/api/shop/detail?id='+this.id)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        console.log(data);
         this.detaildts = data;
        //  console.log(this.allBookss)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style>
.detaildt{
    width: 96%;
    height: 96%;
    background: white;
    margin: 0 auto;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.detaildttop{
    display: flex;
    align-items: center;
}
.detaildttop img{
    width: .44rem;
    height: .3rem;
    margin-left: 10px;
}
.detaildttopp1dd{
    margin-left: 20px;
    width: 1.2rem;
    font-weight: bold;
}
.detaildttopp2{
    color: red;
}
.detaildttopp1dww{
    margin-left: .7rem;;
}
.getshare{
    color: #ffd504;
    font-weight: bold;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>