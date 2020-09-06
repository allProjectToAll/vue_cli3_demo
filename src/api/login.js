
import api from '@/libs/api'
export default {
    // 登录
    login (data) {
      return api.post('/auth/login',data);
    },
    // 获取用户信息
    // getUserInfo () {
    //   return request({
    //     url: '/userinfo',
    //     method: 'get'
    //   })
    // }
  }