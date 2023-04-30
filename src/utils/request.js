import axios from 'axios'

// 创建实例
const http = axios.create({
    baseURL: '/api',
    timeout: 5000   //超时时间
})

// 请求拦截器
http.interceptors.request.use(config => {
    // 对发送请求做些什么
    // let headers = 'application/json;charset=UTF-8'
    // config.headers['Content-Type'] = headers
    return config;
}, err => {
    // 对请求错误做些什么
    return Promise.reject(err)
});

// 响应拦截器
http.interceptors.response.use(response => {
    // 对响应数据做些什么
    return response
}, err => {
    return Promise.reject(err)
})

export default http