/*
 * @Author: your name
 * @Date: 2019-11-09 16:56:08
 * @LastEditTime: 2019-11-09 17:51:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\network\request.js
 */
import axios from 'axios'
export function request(config) {
    //1:创建axios的实例
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeOut: 5000
      })
      //2：axios的拦截器
        
      //3：发送真正的网络请求
      return instance(config)
}
