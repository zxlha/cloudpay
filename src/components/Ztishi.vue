<!--
 * @Author: 范钊
 * @Date: 2019-11-11 14:34:06
 * @LastEditors: 范钊
 * @LastEditTime: 2019-11-11 17:57:00
 * @Description: 
 -->
<template>
  <div class="Ztishibox">
      <p class="wxtishi">温馨提示</p>
      <ol class="tswenzi">
          <li>
              切勿相信任何以网购刷单、贷款审批、信用提额为借口的转账要求，不要轻易向陌生人转账，资金一旦转出将无法追回。
          </li>
          <li>
              您所填的被转账人手机号将用于供您本次交易发起，回顾交易记录以及后续转账使用。
          </li>
          <li>
              新用户单笔限额5000元，单日累计限额5000元。
          </li>
      </ol>
  </div>
</template>

<script>
export default {
    name:"Ztishi",
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
 .Ztishibox{
     width: 96%;
     padding: 2%;
 }
 .wxtishi{
     font-size: 0.2rem;
     color: gray;
 }
 .tswenzi{
     padding: 0.16rem;
     font-size: 0.15rem;
     color: gray;
 }   
</style>