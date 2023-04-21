export default {
    state: {
        isCollapse: false,//控制菜单展开或收起
        tabList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/home",
            },
        ],//面包屑数据
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
        }
    }
}