<!--
 * @Author: your name
 * @Date: 2019-11-08 17:44:19
 * @LastEditTime: 2019-11-13 11:36:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\wordspace\myfile\src\components\arrow.vue
 -->
<template>
  <div class="selimg">
      <div class="top">
        <err></err>
        <p class="cod">{{cod}}</p>
        <proper></proper>
      </div>
      <phoimgs></phoimgs>
  </div>
</template>

<script>
import err from '../components/err';
import proper from '../components/proper';
import phoimgs from '../components/phoimgs';

export default {
    name:'Arrow',
    data(){
        return{
            cod:"请选择一张照片"
        }
    },
    components:{
        err,proper,phoimgs
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
    display: flex;
    justify-content: space-between;
}
.cod{
    margin-top: .12rem;
    font-size: .2rem;
}
</style>
