import { request } from '../utils'

export default {
  isLogin() {
    return request({
      path: '/user/getPermission',
      method: 'get',
      label: '请求权限',
      successTip: false,
    })
  },

  login(data) {
    return request({
      path: '/user/login',
      method: 'post',
      data,
      label: '登录',
    })
  },

  logout() {
    return request({
      path: '/user/logout',
      method: 'get',
      label: '退出登录',
    })
  }
}
