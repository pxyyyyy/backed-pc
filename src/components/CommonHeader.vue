<template>
  <div class="header-container">
    <div class="left-content">
      <!-- 展开关闭侧边栏 -->
      <div>
        <el-button
          @click="handleMenu"
          icon="el-icon-menu"
          size="mini"
        ></el-button>
      </div>

      <!-- 面包屑 -->
      <!-- <span class="title">首页</span> -->
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="item in tags"
            :key="item.path"
            :to="{ path: item.path }"
            :replace="true"
            >{{ item.label }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="right-content">
      <el-dropdown @command="handleCommand">
        <img src="@/assets/headImg.jpg" alt="" />

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookie from "js-cookie";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    handleCommand(command) {
      if (command == "logout") {
        Cookie.remove("token");
        this.$router.push("/login");
        this.$message.success("退出登录");
      }
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },
};
</script>

<style lang="less" scope>
.header-container {
  background-color: #333;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-content {
    display: flex;
    align-items: center;
    margin-left: 20px;
    .title {
      color: #ffffff;
      margin-left: 20px;
    }
    .breadcrumb {
      margin-left: 20px;
      .el-breadcrumb__inner a,
      .el-breadcrumb__inner.is-link {
        color: #777777;
      }
      .el-breadcrumb__inner {
        color: #ffffff;
      }
    }
  }
  .right-content {
    margin-right: 20px;
    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
}
</style>