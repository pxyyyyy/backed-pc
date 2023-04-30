
// 用于处理动态菜单数据，将其转为 route 形式
export function fnAddDynamicMenuRoutes(menuList = [], routes = []) {
    // 用于保存普通路由数据
    let temp = []
    // 用于保存存在子路由的路由数据
    let route = []
    // 遍历数据
    for (let i = 0; i < menuList.length; i++) {
        // 存在子路由，则递归遍历，并返回数据作为 children 保存
        if (menuList[i].children && menuList[i].children.length > 0) {
            // 获取路由的基本格式
            route = getRoute(menuList[i])
            // console.log(route, '子路由');
            // 递归处理子路由数据，并返回，将其作为路由的 children 保存
            route.children = fnAddDynamicMenuRoutes(menuList[i].children)
            // 保存存在子路由的路由
            routes.push(route)
            // console.log(routes, '存在子路由');
        }
        else {
            // 保存普通路由
            temp.push(getRoute(menuList[i]))
            // console.log(temp, '不存在子路由');
        }
    }
    // 返回路由结果
    console.log(routes.concat(temp), '路由结果');
    return routes.concat(temp)
}


// 登陆成功后动态加载路由
function loadRoutes() {
    // 根据返回的路由信息动态加载路由
    let menuList = this.$store.state.tab.menuList
    console.log(menuList, 'menuList,,Router');
    // const accessedRoutes =
    router.addRoutes(menuList)
}

// 登陆成功后动态加载路由
// 返回路由的基本格式
export function getRoute(item) {
    // 路由基本格式
    console.log(`../views/${item.url}`, 'item');
    let route = {
        // 路由的路径
        path: item.path,
        // 路由名
        name: item.name,
        // 路由所在组件
        // component: (resolve) => require([`@/layout/Index`], resolve),
        component: () => import(`@/views/${item.url}`),
        meta: {
            id: item.id,
            icon: item.icon
        },
        // 路由的子路由
        children: []
    }
    // console.log(route, 'route');
    // 返回 route
    return route
}