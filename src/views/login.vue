<template>
  <div class="login-container">
    <div class="login-content">
      <div>
        <h3>系统登录</h3>
        <el-form
          label-width="60px"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="submit('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 通过验证
          console.log(this.ruleForm);
          getMenu(this.ruleForm).then(({ data }) => {
            if (data.code === 200) {
              // 获取菜单数据存入store中
              const { menuData, permissionList } = data.data;
              this.$store.commit("updataMenu", menuData);
              // 全部按钮权限
              localStorage.setItem(
                "permissionList",
                JSON.stringify(permissionList)
              );
              Cookie.set("token", data.data.token);
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scope>
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(246, 214, 230);
  .login-content {
    width: 400px;
    height: 300px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .el-button {
      width: 50%;
      margin-left: -10%;
    }
  }
}
.el-input {
  width: 200px;
}
h3 {
  padding-bottom: 30px;
}
</style>