import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(res => {
    //  加loading   添加用户信息token
    // 拦截 需要返回
    return res
  }, err => {
    console.log(err);
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  // return Prosime
  return instance(config)
}
