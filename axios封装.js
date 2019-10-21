// 根据环境设置 baseURL
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `/java` : '/apis',

  // if (process.env.NODE_ENV === 'development') {
  //   axios.defaults.baseURL = '/api/'
  // } else if (process.env.NODE_ENV === 'production') {
  //   axios.defaults.baseURL = 'https://xxx.com/'
  // }


  // 统一设置请求头
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },

  
  
})

  // 拦截器
  
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
