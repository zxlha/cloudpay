<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-18 10:15:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div>
        <div class="detailt" v-for="(booksd,index) in allBookss" :key="index">
        <span class="detailcdeai" @click="btngodelist"> &lt; </span>
            <div class="detaillt">
                <img :src="booksd.img" alt="">
            </div>
            <div class="detailct">
                <p>{{booksd.name}}</p>
                <!-- <p>{{booksd.p8}}</p> -->
            </div>
            <div class="detailrt">
                <p>品牌介绍</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detailcc',
  props:["id"],
  data() {
    return {
        allBookss:[]
    }
  },
  methods:{
      btngodelist(){
          this.$router.go(-1);
      }
  },
  created(){
    //   console.log("hhhhhh");
    fetch('/api/shop/detail?id='+this.id)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        console.log(data);
         this.allBookss = data;
        //  console.log(this.allBookss)
     })
     .catch(err=>{
       console.log(err);
     })
  },
  mounted(){
    console.log(this.id);
    // console.log(this.allBookss);
    // console.log(this.data);    
  }
}
</script>

<style>
.detailcdeai{
    color: white;
    font-size: 20px;
    padding-left: 10px;
}
.detailt{
    width: 100%;
    height: 1.5rem;
    background: #ffd504;
    display: flex;
    align-items: center;
}
.detaillt img{
    width: .44rem;
}
.detaillt{
    margin-left: 10px;
}
.detailct{
    margin-left: 10px;
    color: white;
    font-size: 14px;
}
.detailrt{
    margin-left: 1.1rem;
    color: white;
}
.detailct p{
    /* text-shadow: 1px 3px 3px rgb(34, 33, 33); */
}
.detailrt p{
    width: 1rem;
    height:.3rem;
    background: #d6b30d;
    border-radius: 10px;
    text-align: center;
    line-height: .3rem;
}
</style>