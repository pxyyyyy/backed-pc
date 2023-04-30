import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import mockApi from './mockServeData/mock'
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
// Mock.mock('/api/home/getData', homeApi.getStaticalData)
// 登录数据post
Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)

// 有参数会报错，要用正则
Mock.mock(/\/api\/news/, 'get', mockApi.newList)

Mock.mock('/api/news/add', 'post', mockApi.add)
Mock.mock('/api/news/del', 'post', mockApi.del)