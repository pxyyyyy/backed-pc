<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#333344"
    text-color="#fff"
  >
    <!-- 没有子菜单 -->
    <h3>{{ isCollapse ? "后台" : "通用后台管理" }}</h3>
    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
      @click="cliceMenu(item)"
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
        <el-menu-item @click="cliceMenu(subItem)" :index="subItem.path">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/home",
        },
        {
          path: "/mall",
          name: "mall",
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
  methods: {
    //   菜单路由跳转
    cliceMenu(item) {
      // 当前页面路由与点击不一致时才跳转
      if (
        this.$route.path !== item.path &&
        !(this.$route.path == "/home" && item.path == "/")
      ) {
        this.$router.push(item.path);
        this.$store.commit("selectMenu", item);
      }
    },
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    // 接收vuex的isCollapse
    isCollapse() {
      return this.$store.state.tab.isCollapse;
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
  height: 100%;
  border-right: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    // font-size: 20px;
  }
}
</style>