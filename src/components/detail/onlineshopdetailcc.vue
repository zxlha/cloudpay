<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 20:11:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="shopdetailcc">
        <div v-for="(bookcconlinee,index) in onlineshopdetailcc" :key="index">
            <div class="shopdetailcctop">
            <div class="shopdetailccr">
                <img :src="bookcconlinee.img" alt="">
            </div>
            <div class="shopdetailccc" v-for="(list,index) in onlineshopdetailcc" :key="index">
                <p class="shopdetailcccp1">{{list.yhlist[0].word}}</p>
                <p class="shopdetailcccp2">{{list.yhlist[0].addr}}</p>
            </div>
            <div class="shopdetailccl">
                <span class="shopdetailcclspan"> > </span>
            </div>
            </div>
            <div class="shopdetailccbottom" v-for="(list,index) in onlineshopdetailcc" :key="index">
                <img :src="list.yhlist[0].img" alt="">
                <p class="shopdetailccbottomp1">查看全部门店</p>
                <p class="shopdetailccbottomp2"> > </p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'onlineshopdetailcc',
  props:["id"],
  data() {
    return {
        onlineshopdetailcc:[],
        yhlist:[],
    }
  },
  created(){
    //   console.log("hhhhhh");
    fetch('/api/shop/detail?id='+this.id)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.onlineshopdetailcc = data;
         for(let i=0;i<this.onlineshopdetailcc.length;i++){
             this.yhlist.push(this.onlineshopdetailcc[i].yhlist);
             console.log(this.yhlist)
         }
        //  console.log(this.allBookss)
     })
     .catch(err=>{
       console.log(err);
     })
  },
}
</script>

<style>
.shopdetailcc{
    width: 97%;
    margin: 0 auto;
    background: white;
    border-radius: 10px;
    padding-bottom: 20px;
    position: relative;
    top: -30px;
}
.shopdetailcctop{
    width: 96%;
    display: flex;
    align-items: center;
    height: .8rem;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
}
.shopdetailccr{
    width: .2rem;
    height: .2rem;
    margin-left: .1rem;
}
.shopdetailccr img{
    width: 100%;
}
.shopdetailcccp1{
    width: 1.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .3rem;
    font-weight: bold;
}
.shopdetailccc{
    margin-left: 10px;
}
.shopdetailcccp2{
    color: #999;
}
.shopdetailccl{
    margin-left: .7rem;
    color: #999;
}
.shopdetailccbottom{
    margin-top: 20px;
    display: flex;
}
.shopdetailccbottom img{
    width: .2rem;
    height: .2rem;
    margin-left: 10px;
}
.shopdetailccbottomp1{
    margin-left: 10px;
    color: #999;
}
.shopdetailccbottomp2{
    margin-left: 2.1rem;
    color: #999;
}
</style>