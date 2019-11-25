<!--
 * @Author: your name
 * @Date: 2019-11-06 21:32:25
 * @LastEditTime: 2019-11-16 11:00:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xinyiyuntan_f:\Vue\project_one\src\components\Search.vue
 -->
<template>
<div class="Jyjilubox">
    <div class="jilu" v-for="(year,index) in years" :key="index">
        <b>￥{{year.money}}</b>
        <div class="xinxi">
            <b>{{year.utel}}</b>
            <p class="riqi">{{year.time}}</p>
        </div>
    </div>
</div>     
</template>
<script>
export default {
    name:"Jyjilu",
    data(){
        return{
            sz:"",
            phone:"",
            riqi:"",
            years:[]
        } 
    },
    methods:{
        
    },
    created(){
        fetch("/api/trade/select")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            // this.years=data[0];
            this.years=data[0];
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
}
</script>

<style scoped>
  .Jyjilubox{
      width: 94%;
      height: 3.8rem;
      background: white;
      margin: 0.15rem auto;
      padding: 0.1rem;
      box-sizing: border-box;
      margin-bottom: 0.25rem;
  }
  .jilu{
      width: 100%;
      height: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.16rem;
      margin-top:0.1rem;
  }
  .xinxi{
      height: 0.4rem;
  }
  .riqi{
      color:gray;
  }
</style>