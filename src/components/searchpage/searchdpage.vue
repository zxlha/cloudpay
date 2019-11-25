<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 11:55:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="searchdpage">
        <div class="searchdpagess">
            <span @click="searchdpagessspan"> &lt; </span>
            <span>搜索</span>
        </div>
        
        <i class="el-icon-search" id="searchdpagei" @click="btnsearchww"></i>
        
        <input type="search" placeholder="品牌、门店、商品、应用" class="searchdpageiin" v-model="name">
        <div class="s1" v-for="(searchl,index) in searchsee" :key="index">
          <div class="s1top">
            <img :src="searchl.img" alt="">
            <span class="s1topspan1">{{searchl.name}}</span>
            <span class="s1topspan2"> > </span>
          </div>
          <div class="sltop2" v-for="(list,index) in searchl.yhlist" :key="index">
            <div class="s2img">
              <img :src="searchl.yhlist[0].img" alt="">
            </div>
            <div class="s2p2">
              <p>{{searchl.yhlist[0].word}}</p>
              <p>{{searchl.yhlist[0].name}}</p>
            </div>
            <div class="s3p3">
              <p>{{searchl.yhlist[0].num}}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'searchdpage',
  data() {
    return {
      name:"",
      searchsee:[]
    }
  },
  created(){
    
  },
  methods:{
    searchdpagessspan(){
      this.$router.go(-1);
    },
    btnsearchww(){
      fetch('/api/shop/search?word='+this.name)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        console.log(data);
         this.searchsee = data;
        //  console.log(this.allBookss)
     })
     .catch(err=>{
       console.log(err);
     })
    }
  }
}
</script>

<style>
.searchdpagess{
  margin-top: 10px;
  font-size: 18px;
  margin-left: 20px;
}
.searchdpagess span:nth-child(2){
  margin-left: 135px;
}
.searchdpageiin{
  width: 340px;
  height: 30px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 10px;
  text-indent: 40px;
  margin-top: 20px;
}
#searchdpagei{
  position: relative;
  left: 40px;
  top: 5px;
  color: rgb(126, 123, 123);
}
.s1top{
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.s1{
  width: 95%;
  background: #fff;
  margin-top: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
}
.s1top img{
  width: 1rem;
  height: .6rem;
  border-radius: 10px;
  margin-left: 30px;
}
.s1topspan1{
  margin-left: 10px;
}
.s1topspan2{
  margin-left: 120px;
  color: rgb(116, 114, 114);

}
.sltop2{
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid rgb(209, 208, 208);
}
.s2img img{
  width: .2rem;
  height: .1rem;
}
.s2p2{
  font-size: 12px;
  margin-left: 10px;
}
.s2p2 p:nth-child(1){
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.s2p2 p:nth-child(2){
  color: rgb(155, 154, 154);
}
.s3p3 p{
  color: red;
  font-size: 12px;
  margin-left: 30px;
}
body{
  background: #f1efef;
}
</style>
