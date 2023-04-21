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
      <img src="@/assets/headImg.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
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
  line-height: 60px;
  display: flex;
  justify-content: space-between;
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
      width: 50px;
      height: 50px;
    }
  }
}
</style>