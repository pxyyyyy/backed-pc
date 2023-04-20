<template>
  <div class="container">
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/CommonAside.vue";
import Header from "../components/CommonHeader.vue";
export default {
  components: {
    Aside,
    Header,
  },
};
</script>

<style lang="less" scope>
.container {
  background-color: #efefef;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  padding: 0;
}
</style>