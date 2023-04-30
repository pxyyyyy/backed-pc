<template>
  <div>
    <div>根据权限进行按钮控制</div>
    <button v-permission="'add'">新增</button>
    <button v-permission="'del'">删除</button>
    <button v-permission="'edit'">编辑</button>
  </div>
</template>

<script>
import permission from "../directives/permission";
export default {
  name: "permission",
  directives: {
    permission: permission,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>