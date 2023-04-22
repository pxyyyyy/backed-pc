import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permission from './mockServeData/permission'

// 定义mock请求拦截
// Mock.mock('/api/home/getData', 'get', function () {
//     // 拦截到请求后的处理逻辑
//     console.log('拦截到');
//     // 返回的数据
//     return []
// })

// 首页数据
Mock.mock('/api/home/getData', homeApi.getStaticalData)
// 登录数据post
Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)