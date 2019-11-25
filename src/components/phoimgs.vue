<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-14 16:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="center">
    <div class="usual" id="app">
      <div class="usual-child" v-for="(phoimg,index) in phoimgss" :key="index">
          <img :src="phoimg.src">
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: "phoimg",
  data() {
    return {
        phoimgss:[],
    };
  },
  // mounted(){
  //   this.axios.get("http://local:3000/phoimgs")
  // },
  created(){
    fetch('api/phoimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        this.phoimgss=data;
     })
     .catch(err=>{
       console.log(err);
     })
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #666;
  margin-top: .2rem;
 
}
.usual {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.usual img {
  width: 100%;
  vertical-align:middle;
}
.usual-child{
    display: inline-block;
    width: 33.333333333333%;
    box-sizing: border-box;
    border: 1px solid #666;

}
</style>
