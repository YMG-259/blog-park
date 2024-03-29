import axios from 'axios'
import { Toast } from 'antd-mobile'
import { getTokenInfo } from './storage'
// 1. 创建新的 axios 实例
const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
})

// 2. 设置请求拦截器和响应拦截器
http.interceptors.request.use((config) => {
  const token = getTokenInfo().token
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response) {
      Toast.show({
        content: error.response.data.message,
      })
    } else {
      Toast.show({
        content: '网络繁忙，请稍后重试',
      })
    }
    return Promise.reject(error)
  }
)

// 3. 导出该 axios 实例
export default http
