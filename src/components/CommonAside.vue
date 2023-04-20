<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
  >
    <!-- 没有子菜单 -->
    <h3>通用后台管理</h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 有子菜单 -->
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>

      <!-- 子菜单的子菜单 -->
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/home",
        },
        {
          path: "/mail",
          name: "mail",
          label: "商品管理",
          icon: "video-play",
          url: "Home/home",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
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
    };
  },
  methods: {},
  computed: {
    // 没有子菜单
    noChildren() {
      console.log("没");
      return this.menuData.filter((item) => !item.children);
    },

    // 有子菜单
    hasChildren() {
      console.log("有子菜单");
      return this.menuData.filter((item) => item.children);
    },
  },
};
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  /* height: 100vh; */
}
.el-menu {
  height: 100vh;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    // font-size: 20px;
  }
}
</style>