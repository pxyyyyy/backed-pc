import http from '../utils/request'

// 请求首页数据
export const getData = () => {
    return http.get('/home/getData')
}

export const getMenu = (data) => {
    return http.post('/permission/getMenu', data)
}

export const getNew = (params) => {
    return http.get('/news', { params })
}
export const addNew = (data) => {
    return http.post('/news/add', data)
}
export const delNew = (data) => {
    return http.post('/news/del', data)
}