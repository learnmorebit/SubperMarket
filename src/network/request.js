import axios from "axios"

export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
  })

  // 拦截器的使用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  //使用实例请求数据
  return instance(config)

}
