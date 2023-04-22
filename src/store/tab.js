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
        menuList: []

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
        // 动态路由
        addMenu(state, router) { }

    }
}