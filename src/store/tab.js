import Cookie from 'js-cookie'
export default {
    state: {
        //控制菜单展开或收起
        isCollapse: false,
        //面包屑数据
        tabList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/home",
            },
        ],
        // 菜单数据
        menuList: [],
        permission: [],//当前路由权限
    },
    mutations: {
        // 修改菜单展开收起方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // 不点击首页
            if (val.name != 'home' && (val.path != state.tabList[state.tabList.length - 1].path)) {
                // 判断是否点击过该菜单
                const flag = state.tabList.findIndex(item => item.name == val.name)
                if (flag === -1) {
                    state.tabList.push(val)
                }
            }
        },
        // 更新右侧导航菜单
        updataMenu(state, val) {
            // 持久化处理
            localStorage.setItem("menuData", JSON.stringify(val))
            state.menuList = val
        },
        // 动态注册路由,防止输入url时可以进入页面
        addMenu(state, router) {
            // 判断缓存中是否存在数据
            if (!Cookie.get('menuDtat')) return
            const menuData = JSON.parse(Cookie.get('menuData'))
            state.menuList = menuData
        },
        // 按钮权限控制
        routeNameChange(state, val) {
            state.permission = []
            //val 当前路由name
            // permissionList 所有按钮权限
            let permissionList = JSON.parse(localStorage.getItem('permissionList'))
            permissionList.forEach((item) => {
                let key = item.split(":")[0];
                if (val == key) {
                    state.permission.push(item.split(":")[1]);
                    localStorage.setItem("permissions", JSON.stringify(state.permission))
                }
            });
            console.log(state.permission, '按钮权限');
        }
    }
}