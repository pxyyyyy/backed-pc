// 引用路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'

// 1.创建路由组件（页面）
// 2.将路由与组件进行映射

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        children: [
            { path: '/home', component: Home },
            { path: '/user', component: User },
        ]
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

export default router