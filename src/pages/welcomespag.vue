<!--
 * @Author: your name
 * @Date: 2019-11-04 17:31:06
 * @LastEditTime: 2019-11-15 20:18:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\App.vue
 -->
<template>
  <div id="app">
      <div class="weltop">
        <myArrow></myArrow>
        <p class="msgcode">{{ord}}</p>
        <p class="save" @click="panduan">保存</p>
      </div>
        <div class="welTextarea">
          <textarea cols="10" rows="6" id="area" maxlength="16" v-model="welcomes"></textarea>
          <p>可输入16个字</p>
        </div>
      <p style="color:red">{{msg}}</p>
  </div>
</template>

<script>
import myArrow from '../components/myArrow';
  export default {
    name:'register',
    data(){
        return{
          msg:"",
          save:"保存",
          ord:"欢迎语",
          panduan:"",
          welcomes:""
        }
    },
    components:{
        myArrow
    },
    panduan:function(){
	     		console.log(this.welcomes);
	     		if(this.welcomes.length==0){
	     			this.msg="内容不能为空";
	     		}else if(r.test(this.welcomes)){
            fetch('api/user/welcome?tel='+this.welcomes,{
              method:"POST"
            })
			      	.then(res=>{
			       	 	return res.json();
			    	})
			      	.then(data=>{ 
                console.log(data);
                if(data==1){
                  Toast('设置成功');
                  this.$router.push({
                    path:"personalSettings"
                  })
                }else{
                  Toast('设置失败!');
                }
			     	})
			     	.catch(err=>{
			     		console.log(err);
			     	})
			     	
	     		}
	     	}
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    
  }
  html{
    font-size:26.67vw;
  }
  body{
    font-size: 14px;
    height: 100%;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .weltop{
      display: flex;
      justify-content: space-between;
  }
  .myArrow{
    margin:10px 0 0 5px;
    height: .4rem;
  }
    .msgcode{
        margin-top: 10px;
        font-size: .18rem;
        box-sizing: border-box;
  }
  .save{
    color: #5c97d9;
    margin: 10px 10px 0 0;
    font-size: .2rem;
  }
  .welTextarea{
    text-align: center;
}
#area{
    resize:none;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    outline: none;
    padding: 10px;
}
.welTextarea p{
    text-align: right;
    padding-right: .15rem;
    margin-top: 10px;
}
</style>
