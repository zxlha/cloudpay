<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 16:43:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="get">
        <div class="get1" v-for="(online,index) in allBookssa" :key="index" @click="goRech(online.id)">
            <!-- <router-link  :to='"/rich/"+book.id'> -->
                <div class="get1_top"  >
                    <img :src="online.img" alt="">
                    <span>{{online.name}}</span>
                    <span class="gets2">></span>
                </div>
                <div v-for="(list,index) in online.yhlist" :key="index">
                    <div class="get1bottom">
                        <div class="getbottoml">
                            <img :src="online.yhlist[0].img" alt="">
                        </div>
                        <div class="getbottomc">
                            <p>{{online.yhlist[0].word}}</p>
                            <p>{{online.yhlist[0].name}}</p>
                        </div>
                        <div class="getbottomr">
                            <p>{{online.yhlist[0].num}}</p>
                        </div>
                    </div> 
                </div>
                
                <!-- <div class="get1bottom">
                    <div class="getbottoml">
                        <img :src="online.img3" alt="">
                    </div>
                    <div class="getbottomc">
                        <p>{{online.onlinedd4}}</p>
                        <p>{{online.onlinedd5}}</p>
                    </div>
                    <div class="getbottomr">
                        <p>{{online.onlinedd6}}</p>
                    </div>
                </div>   -->
            <!-- </router-link>-->
        </div>
    </div>
</template>

<script>
export default {
  name: 'local',
  data() {
    return {
        allBookssa:[]
    }
  },
  created(){
    fetch('/api/shop/xsyh')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.allBookssa = data;
     })
     .catch(err=>{
       console.log(err);
     })
  },
  methods:{
      goRech(id){
          this.$router.push({path:`/onlinedetaildetail/${id}`});
      }
  }
}
</script>

<style>
.get{
    width: 100%;
    height: 100%;
    background: rgb(228, 226, 226);
    overflow: hidden;
}
.get:last-child{
    margin-bottom: 49px;
}
.get1{
    width: 95%;
    background: white;
    margin: 0 auto;
    margin-top:.1rem; 
    margin-bottom:.1rem; 
    border-radius: 20px;
}
.get1_top{
    width: 95%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
}
.get1_top img{
    width: 1rem;
    border-radius: 20px;
    margin-left: 20px;
    margin-top: 10px;
}
.get1_top span{
    line-height: 20px;
    margin-top: 10px;
}
.gets2{
    margin-left: 1.3rem;
}
.get1bottom{
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.getbottoml{
    margin-left: 10px;
    width: .14rem;
    height: .14rem; 
}
.getbottoml img{
    width: 100%; 
 }
.getbottomc{
    margin-left: 15px;
}
.getbottomc p:nth-child(1){
    width: 1.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: bold;

}
.getbottomc p:nth-child(2){
    font-size: 12px;
    color: #ccc;
}
.getbottomr{
    margin-left: 40px;
    font-size: 12px;
    color: red;
}
</style>

