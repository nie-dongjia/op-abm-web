import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/abm-web/table/list',
    method: 'get',
    params
  })
}
