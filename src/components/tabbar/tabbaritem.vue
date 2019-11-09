<!--
 * @Author: your name
 * @Date: 2019-11-08 20:29:24
 * @LastEditTime: 2019-11-09 11:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabBar.vue
 -->
<template>
       <div class="tab-bar-item" @click="itmeclick">
          <div v-if="!isactive" >
              <slot name="item-icon"></slot>
          </div>
          <div v-else>
              <slot  name="item-icon-active"></slot>
          </div>
          <div :style="activestyle">
              <slot name="item-text"></slot>
          </div>
      </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  props:{
    path:String,
    activecolor:{
      type:String,
      default:"red"
    }
  },
  methods:{
    itmeclick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activestyle(){
      return this.isactive?{color:this.activecolor}:{}
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}

</style>
