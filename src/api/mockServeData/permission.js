import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { account, password } = JSON.parse(config.body)
        // 先判断用户是否存在
        // 判断账号密码是否对应
        if (account === '1' && password === '1') {
            return {
                code: 200,
                data: {
                    menuData: [
                        {
                            path: "/",
                            name: "home",
                            label: "首页",
                            icon: "s-home",
                            url: "Home",
                        },
                        {
                            path: "/mall",
                            name: "mall",
                            label: "商品管理",
                            icon: "video-play",
                            url: "Mail",
                        },
                        {
                            path: "/user",
                            name: "user",
                            label: "用户管理",
                            icon: "s-home",
                            url: "User",
                        }, {
                            path: "/new",
                            name: "new",
                            label: "新闻管理",
                            icon: "s-home",
                            url: "New",
                        },
                        {
                            path: "/permission",
                            name: "permission",
                            label: "权限管理",
                            icon: "s-home",
                            url: "Permission",
                        },
                        {
                            path: "/other",
                            name: "other",
                            label: "其他",
                            icon: "s-home",
                            children: [
                                {
                                    path: "/page1",
                                    name: "page1",
                                    label: "页面1",
                                    icon: "s-home",
                                    url: "Page1",
                                },
                                {
                                    path: "/page2",
                                    name: "page2",
                                    label: "页面2",
                                    icon: "s-home",
                                    url: "Page2",
                                },
                            ],
                        },
                    ],
                    roleId: 1,
                    nickname: "超级用户",
                    roleName: "管理员",
                    // 按钮权限
                    permissionList: [
                        "mail:add",
                        "mail:edit",
                        "mail:del",
                        "user:add",
                        "user:edit",
                        "user:del",
                        "new:del",
                        "permission:del",
                        "permission:add",
                        "permission:search",
                        "permission:edit",
                    ],
                    "userId": 10003,
                    token: Mock.Random.guid(),
                    msg: '登录成功'
                }
            }
        } else if (account === '123' && password === '123') {
            return {
                code: 200,
                data: {
                    menuData: [
                        {
                            path: "/",
                            name: "home",
                            label: "首页",
                            icon: "s-home",
                            url: "Home/home",
                        },
                        {
                            label: "其他",
                            icon: "s-home",
                            children: [
                                {
                                    path: "/page1",
                                    name: "page1",
                                    label: "页面1",
                                    icon: "s-home",
                                    url: "Home/home",
                                },
                                {
                                    path: "/page2",
                                    name: "page2",
                                    label: "页面2",
                                    icon: "s-home",
                                    url: "Home/home",
                                },
                            ],
                        },
                    ],
                    token: Mock.Random.guid(),
                    msg: '登录成功'
                }
            }
        }
        else {
            return {
                code: -1,
                data: {
                    msg: "账号或密码错误"
                }
            }
        }
    }
}