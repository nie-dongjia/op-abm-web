import request from '@/utils/request'
// 登录
export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}
// 获取用户信息 包括 角色、菜单
export function getInfo(token) {
  return request({
    url: '/sys/user/info',
    method: 'get',
    params: { token }
  })
}
// 登出
export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}
