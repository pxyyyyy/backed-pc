<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <img src="@/assets/headImg.jpg" alt="" />
            <div class="name">
              <p>Admin</p>
              <p class="size gray">超级管理员</p>
            </div>
          </div>
          <div class="login-info size">
            <div>
              <span class="gray">上次登录时间：</span
              ><span class="desc">2021.07.19</span>
            </div>
            <div>
              <span class="gray">上次登录地点：</span
              ><span class="desc">武汉</span>
            </div>
          </div>
        </el-card>
        <br />
        <el-card shadow="hover">
          <el-table
            :data="tableData"
            size="mini"
            max-height="300"
            style="margin-top: 20px; width: 100%"
          >
            <el-table-column prop="name" label="水果"> </el-table-column>
            <el-table-column prop="todayBuy" label="今日购买">
            </el-table-column>
            <el-table-column prop="monthBuy" label="本月购买">
            </el-table-column>
            <el-table-column prop="totalBuy" label="总购买"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in orderList" :key="item">
            <el-card class="order-card">
              <div class="order">
                <div class="left" :style="{ background: item.color }">
                  <i :class="`el-icon-${item.icon}`"></i>
                </div>
                <div class="right">
                  <p class="price">￥{{ item.price }}</p>
                  <p class="size gray">{{ item.desc }}</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tableData: [
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 200,
          totalBuy: 300,
        },
        {
          name: "雪梨",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 400,
        },
        {
          name: "香蕉",
          todayBuy: 200,
          monthBuy: 400,
          totalBuy: 600,
        },
        {
          name: "橘子",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
        {
          name: "橘子",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
        {
          name: "橘子",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
        {
          name: "橘子",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
        {
          name: "橘子",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
        {
          name: "橘子",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
        {
          name: "橘子33",
          todayBuy: 100,
          monthBuy: 600,
          totalBuy: 700,
        },
      ],
      orderList: [
        {
          icon: "success",
          price: "1234",
          desc: "今日支付订单",
          color: "#2ec7c9",
        },
        {
          icon: "star-on",
          price: "111",
          desc: "今月支付订单",
          color: "#ffb980",
        },
        {
          icon: "s-goods",
          price: "222",
          desc: "总计支付订单",
          color: "#5ab1ef",
        },
        {
          icon: "success",
          price: "1234",
          desc: "今日支付订单",
          color: "#2ec7c9",
        },
        {
          icon: "star-on",
          price: "111",
          desc: "今月支付订单",
          color: "#ffb980",
        },
        {
          icon: "s-goods",
          price: "222",
          desc: "总计支付订单",
          color: "#5ab1ef",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.user {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #797979;
  padding-bottom: 20px;
  margin-bottom: 20px;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .name {
    font-size: 30px;
    margin-bottom: 2px;
  }
}
.gray {
  color: #797979;
}
.size {
  font-size: 10px;
}
.login-info {
  div {
    padding-bottom: 10px;
  }
  .desc {
    margin-left: 20px;
  }
}
.order-card {
  margin-bottom: 20px;
  .order {
    display: flex;
    // height: 50px;
    .left {
      width: 80px;
      // height: 50px;
      // background-color: rgb(59, 220, 222);
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      i {
        color: #ffffff;
      }
    }
    .right {
      width: 100%;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .price {
        font-size: 20px;
      }
      .desc {
      }
    }
  }

  .el-card__body,
  .el-main {
    padding: 0;
  }
  .el-card {
    border: none;
  }
}
</style>