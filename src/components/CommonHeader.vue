<template>
  <div class="header-container">
    <div class="left-content">
      <!-- 展开关闭侧边栏 -->
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <span class="title">首页</span>
    </div>
    <div class="right-content">
      <img src="@/assets/headImg.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<style lang="less" scope>
.header-container {
  background-color: #333;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  .left-content {
    margin-left: 20px;
    .title {
      color: #ffffff;
      margin-left: 20px;
    }
  }
  .right-content {
    margin-right: 20px;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
}
</style>