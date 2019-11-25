<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-15 16:33:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
    <div class="functions">
        <div class="bigicon">
            <div class="function_top" v-for="(iconj,index) in icontup" :key="index">
                <a href="#">
                    <img :src="iconj.src" alt="">
                    <span>{{iconj.name}}</span>
                </a>
            </div>
        </div>
        </div>
</template>

<script>
export default {
  name: 'functions',
  data() {
    return {
        icontup:[
            
        ]
    }
  },
  created(){
    fetch('/api/func/index')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.icontup = data;
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style>
.functions{
    width: 100%;
    height:2rem;
}
.bigicon{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.function_top{
    width: 20%;
    height:.8rem;
    margin-top: 15px;
    text-align: center;
}
.function_top img{
	width: .5rem;
    height:.5rem;
}
.function_top span{
	font-size:.12rem;
	display: block;
    text-align: center;
    margin-top: .05rem;
}
.function_top a{
    color: black;
    text-decoration: none;
}
.function_bottom{
    width: 100%;
    height:.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
}
.function_bottom img{
	width: .4rem;
    height:.4rem;
    border-radius: 50%;
}
.function_bottom span{
	font-size:.12rem;
	display: block;
    text-align: center;
    margin-top: .05rem;
}
.function_bottom a{
    color: black;
    text-decoration: none;
}
</style>
