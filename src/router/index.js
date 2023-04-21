// 引用路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'
import Login from '../views/login'
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

// 1.创建路由组件（页面）
// 2.将路由与组件进行映射

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',//重定向
        children: [
            { path: '/home', component: Home },
            { path: '/user', component: User },
            { path: '/mall', component: Mall },
            { path: '/page1', component: PageOne },
            { path: '/page2', component: PageTwo },
        ]
    },
    {
        path: '/login',
        component: Login
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path === '/login') {
        next()
    } else {
        //获取token
        const token = Cookie.get('token')
        console.log(token, 'token');
        if (!token) { next('/login') }
        else if (token) { next() }
        // else { next() }
    }
})


// 路由重复点击出错（降级处理3.0.0）
// 添加以下代码
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     console.log('2');
//     return originalPush.call(this, location).catch(err => err)
// }

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

export default router