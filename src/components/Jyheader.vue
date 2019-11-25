<!--
 * @Author: 范钊
 * @Date: 2019-11-11 14:34:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-16 10:14:34
 * @Description: +
 -->
<template>
    <div class="Jyheaderbox">
      <div class="Jyear" @click.stop="testyear()">
          <input  type="button" class="years" value="2019" ref="yearId">
          <span class="iconfont icon-arrow-bottom"></span>
      </div>
      <div class="chooseyear" v-show="isshowyear">
          <div class="yuanyear" @click="yuanyear(2017)">2017</div>
          <div class="yuanyear" @click="yuanyear(2018)">2018</div>
          <div class="yuanyear" @click="yuanyear(2019)">2019</div>
      </div>
      <div class="zu">
            <p class="zhichu">支出</p>
            <p class="number"  v-show="eyes" ref="tip">{{data.in}}</p>
            <span class="iconfont icon-yanjing"  v-show="eyes" @click="test()"></span>
            <span class="iconfont icon-yanjing1" v-show="!eyes" @click="test()"></span> 
      </div> 
      <div class="suan">
          <div class="shouru">
              <p>收入</p>
              <p ref="sr" v-show="eyes" >{{data.out}}</p>
          </div>
          <div class="shouru">
              <p>结余</p>
              <p ref="jy"  v-show="eyes" >{{data.cha}}</p>
          </div>
          <div class="shouru">
              <p>余额</p>
              <p ref="ye"  v-show="eyes">{{data.balabce}}</p>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"Jyheader",
    props:['isshowyear'],
    data(){
        return{
            alldata:[],
            data:{},
            eyes:true,
            tip:"",
            sr:"",
            jy:"",
            ye:""
        }
    },
    methods:{
        test(){
            this.eyes=!this.eyes
            // if(this.eyes==false){
            //     this.$refs.tip.innerHTML="****";
            //     this.$refs.sr.innerHTML="****";
            //     this.$refs.jy.innerHTML="****";
            //     this.$refs.ye.innerHTML="****";
            // }
            // else if(this.eyes==true){
            //     this.$refs.tip.innerHTML=this.data.zhichumoney;
            //     this.$refs.sr.innerHTML=this.data.shourumoney;
            //     this.$refs.jy.innerHTML=this.data.shourumoney - this.data.zhichumoney;
            //     this.$refs.ye.innerHTML=this.data.yue;
            // }
        },
        testyear(){
            this.$emit('changeshow');//给父元素传值
        },
        yuanyear(year){
            this.$refs.yearId.value = year;
            switch(year){
                case 2017:
                    this.data=this.alldata[2];
                    break;
                case 2018:
                    this.data=this.alldata[1];
                    break;
                case 2019:
                    this.data=this.alldata[0];
                    break;
                default:;
                break;
            }
        }
    },
    created(){
        fetch("/api/trade/selectmoney")
        .then(res=>{
             return res.json();
        })
        .then(data=>{
            this.alldata=data;
            this.data=this.alldata[0];
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style scoped>
     .Jyheaderbox{
         width: 100%;
         height: 2.2rem;
         background: #F0252B;
         font-size: 0.2rem;
         padding: 0.1rem 0.15rem;
         box-sizing: border-box;
         position: relative;
     }
     .Jyear{
         width: 0.7rem;
         height: 0.3rem;
     }
     .years{
         width: 0.4rem;
         height:0.3rem;
         font-size: 0.18rem;
         border: none;
         background: none;
         outline: none;
         color: white;
     }
     .icon-arrow-bottom{
         color: white;
     }
     .chooseyear{
         width: 100%;
         height: 0.8rem;
         background: white;
         position: absolute;
         top:0.35rem;
         left:0px;
         display: flex;
         justify-content: space-around;
         align-items: center;
     }
     .yuanyear{
         width: 0.6rem;
         height: 0.6rem;
         background: #F0252B;
         font-size: 0.2rem;
         color:white;
         border-radius: 50%;
         line-height: 0.6rem;
         text-align: center;
     }
     .zu{
         font-size: 0.2rem;
         color: white;
         margin-top: 0.1rem;
     }
     .number{
         font-size: 0.5rem;
         display: inline-block;
     }
     .icon-yanjing{
         display: inline-block;
         font-size: 0.5rem;
     }
     .icon-yanjing1{
         display: inline-block;
         font-size: 0.3rem;
     }
     .suan{
         width: 100%;
         height: 0.5rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-top:0.1rem;
         font-size: 0.2rem;
         color: white;
     }
</style>