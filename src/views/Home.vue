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
            max-height="350"
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
          <el-col :span="8" v-for="item in orderList" :key="item.desc">
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
        <el-row class="charts">
          <el-card>
            <!-- 折线图 -->
            <div id="chart1" style="width: 100%; height: 250px"></div>
          </el-card>
        </el-row>
        <el-row :gutter="20" style="margin-top: 10px" class="charts">
          <el-col :span="12">
            <el-card>
              <!-- 柱形图 -->
              <div id="chart2" style="width: 100%; height: 250px"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <!-- 饼图 -->
              <div id="chart3" style="width: 100%; height: 250px"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引用echarts
import * as echarts from "echarts";
import { getData } from "../api";
export default {
  name: "home",
  data() {
    return {
      /*tableData: [
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
      ],*/
      orderList: [
        {
          icon: "success",
          price: "1234",
          desc: "今日支付订单1",
          color: "#2ec7c9",
        },
        {
          icon: "star-on",
          price: "111",
          desc: "今月支付订单2",
          color: "#ffb980",
        },
        {
          icon: "s-goods",
          price: "222",
          desc: "总计支付订单3",
          color: "#5ab1ef",
        },
        {
          icon: "success",
          price: "1234",
          desc: "今日支付订单4",
          color: "#2ec7c9",
        },
        {
          icon: "star-on",
          price: "111",
          desc: "今月支付订单5",
          color: "#ffb980",
        },
        {
          icon: "s-goods",
          price: "222",
          desc: "总计支付订单6",
          color: "#5ab1ef",
        },
      ],
      tableData: [],
      userData: [],
      userDataX: [],
      chart2Data1: [],
      chart2Data2: [],
      videoData: [],
      orderData: [],
      orderData1: [],
      orderData2: [],
      orderData3: [],
      orderDataX: [],
      myChart1: [],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      getData().then(({ data }) => {
        console.log(data.data, "data");
        const { tableData, userData, videoData, orderData } = data.data;
        this.tableData = tableData;

        this.userData = userData;

        this.videoData = videoData;

        // 折线图数据
        this.orderData = orderData;

        this.init();
      });
    },
    init() {
      this.initChart1();
      this.initChart2();
      this.initChart3();
    },
    // 折线图
    initChart1() {
      const myChart1 = echarts.init(document.getElementById("chart1"));
      var myChart1option = {};
      myChart1option.tooltip = {
        trigger: "axis",
      };
      // 处理数据
      myChart1option.xAxis = { data: this.orderData.date }; //X轴
      myChart1option.yAxis = {}; //Y轴
      const xAxis = Object.keys(this.orderData.data[0]);
      myChart1option.legend = { data: xAxis }; //图例
      myChart1option.series = []; //数据
      xAxis.forEach((key) => {
        myChart1option.series.push({
          name: key,
          data: this.orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
      console.log(myChart1option, "myChart1option");
      // 设置图表
      myChart1.setOption(myChart1option);
    },
    /*initChart1() {
      this.myChart1 = echarts.init(document.getElementById("chart1"));
      this.myChart1.setOption({
        tooltip: {},
        legend: { data: this.orderDataX },
        xAxis: {
          data: this.orderData.date,
        },
        yAxis: {},
        series: [
          {
            data: this.orderData1,
            type: "line",
            stack: "x",
          },
          {
            data: this.orderData2,
            type: "line",
            stack: "x",
          },
          {
            data: this.orderData3,
            type: "line",
            stack: "x",
          },
        ],
      });
    },*/
    // 柱状图
    /*initChart2() {
      let myChart = echarts.init(document.getElementById("chart2"));
      const chart2Option = {};
      chart2Option.xAxis = { data: this.userDataX };
      chart2Option.yAxis = {};
      chart2Option.series = [];
      // const xAxis = Object.keys(this.userDate[1]);
      this.userDate.forEach(item => {
        if(item.active){

        }
      })
      console.log(xAxis, "xAxis");

      chart2Option.series.push({
        data: this.orderData.data.map((item) => item[key]),
        type: "bar",
        stack: "x",
      });
      myChart.setOption(chart2Option);
    },*/

    initChart2() {
      let myChart = echarts.init(document.getElementById("chart2"));
      myChart.setOption({
        xAxis: {
          data: this.userData.map((item) => item.date),
        },
        yAxis: {},
        legend: {
          textStyle: {
            color: "#333",
          },
        }, //图例
        grid: { left: "20%" },
        tooltip: {
          trigger: "axis",
        },
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: this.userData.map((item) => item.new),
            type: "bar",
            stack: "x",
          },
          {
            name: "活跃用户",
            data: this.userData.map((item) => item.active),
            type: "bar",
            stack: "y",
          },
        ],
      });
    },
    initChart3() {
      let myChart = echarts.init(document.getElementById("chart3"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          textStyle: {
            color: "#333",
          },
        }, //图例
        series: [
          {
            type: "pie",
            data: this.videoData,
          },
        ],
      });
    },
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
  margin-bottom: 10px;
  .order {
    display: flex;
    .left {
      width: 60px;
      line-height: 48px;
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
.charts {
  .el-card__body,
  .el-main {
    padding: 20px 0 0 0;
  }
}
</style>