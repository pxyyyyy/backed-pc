<template>
  <div>
    <div class="header">
      <el-button type="primary" @click="addNews">新增</el-button>
      <div>
        <el-input v-model="input" placeholder="请输入搜索内容" />
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="img_url" label="图片">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.img_url"
            ></el-image>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="id" label="市区"> </el-table-column> -->
        <el-table-column prop="content" label="内容" width="300">
        </el-table-column>
        <el-table-column prop="add_time" label="时间"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="del(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="params.page"
          :page-sizes="[5, 10, 15, 30]"
          :page-size="5"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getNew, addNew, delNew } from "../api";
export default {
  name: "new",
  data() {
    return {
      input: "",
      tableData: [],
      total: null,
      params: {
        page: 1,
        pageSize: 5,
      },
    };
  },
  created() {
    this.initData();
    // axios.get("/api/news", { params }).then((res) => {
    //   console.log(res);
    //   this.tableData = res.data.data.list;
    // });
  },
  methods: {
    initData() {
      getNew(this.params).then((res) => {
        console.log(res);
        this.tableData = res.data.data.list;
        this.total = res.data.data.total;
      });
    },
    addNews() {
      let form = {
        title: "新闻11",
        date: "2023-04-30",
        content: "内容",
      };
      addNew(form).then((res) => {
        console.log(res, "add");
        this.initData();
        this.$message.success(res.data.msg);
      });
    },
    del(id) {
      console.log(id, "id");
      delNew({ id: id }).then((res) => {
        console.log(res);
        this.initData();
        this.$message.success(res.data.msg);
      });
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(val, "一页展示多少条");
      this.params.pageSize = val;
      this.initData();
    },
    handleCurrentChange(val) {
      console.log(val, "第几页");
      this.params.page = val;
      this.initData();
    },
  },
};
</script>

<style lang="less">
.header {
  display: flex;
  justify-content: space-between;
}
.table {
  margin-top: 20px;
}
.pagination {
  width: 100%;
  padding-bottom: 50px;
  position: relative;
  background-color: #fff;
  .el-pagination {
    position: absolute;
    top: 10px;
    right: 0px;
  }
}
</style>