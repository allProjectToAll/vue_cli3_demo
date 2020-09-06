import axios from 'axios';
// import VueCookies from 'vue-cookie'
import store from '@/store'
import { Message,MessageBox } from 'element-ui';
import router from '@/router';
// import { getToken } from '@/utils/auth'
// import Code from '@/utils/code'

let util = {};
console.log(process.env.NODE_ENV ,"process.env.NODE_ENV ")
//https://jsonplaceholder.typicode.com
const ajaxUrl = process.env.NODE_ENV === 'development' ? "http://www.loanera.cn/api/v1":"https://www.loanera.cn/api/v1";//"":"";//

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000,
  withCredentials: true //使前台能够保存cookie
});

// http request 拦截器≈
util.ajax.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("token")|| '';
    
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers['biu-token'] = sessionStorage.getItem("token");
    }
    console.log(config,"config123")
    return config;
  },err => {
    return Promise.reject(err);
  }
);
// http response 拦截器
util.ajax.interceptors.response.use(
  res => {
    console.log(res,"response")
    // return response;
    if(res.data.succ){
      //如果后台返回的json显示成功，pass
      return res;
    }else{
      if(res.data.code == Code.UNAUTHEN || res.data.code == Code.SESSION_TIMOUT){
        //处理登录相关的错误
        // MessageBox.confirm('登录时间过长，请重新登录！', '确定登出',{confirmButtonText: '重新登录',cancelButtonText: '取消',type: 'warning'}).then(() => {
        //     router.push({ name: "login" });
        // })
        this.$confirm('登录时间过长，请重新登录！', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
            router.push({ name: "login" });
        }).catch(() => {
          
        });
      }else{
        //其它错误弹出错误信息
        Message({ message: res.data.msg, type: 'error', duration: 5000});
      }
      return Promise.reject('error');
    }
  },
  error => {
    console.error('request err: %o', error)// for debug
    Message({message: error.message,type: 'error',duration: 5000})
    return Promise.reject(error)
  }
);


export default util;
