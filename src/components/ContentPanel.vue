<template>
  <div class="content-panel">
    <!-- 面板上部面包屑 -->
    <div class="content-top">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">审计分析</el-breadcrumb-item>
        <el-breadcrumb-item>财政审计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 面板内容 -->
    <div class="content-center">
      <div class="centent-title">
        <span>批量查询</span>
      </div>
      <div class="centent-inner">
        {{selected}}
        <!-- <div class="inner-top">
          <span class="input-lable">导入Excel文本：</span>
          <el-input v-model="input" class="centent-inner-input top-item" placeholder="请输入内容"></el-input>
          <button type="button" class="btn btn-default top-item">导入</button>
          <button type="button" class="btn btn-primary top-item">导出EXcel</button>
        </div>
        <div class="inner-table">
          <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
        </div>-->
      </div>
    </div>
    <!-- 面板底部 -->
    <div class="content-footer">
      <div class="footer-left">
        <div class="left-item project-name">
          <div>项目名称:上市经济审计</div>
        </div>
        <div class="left-item operator">
          <div>当前操作员:审计一组</div>
        </div>
        <div class="left-item accounting-data">
          <div>当前会计数据:暂无</div>
        </div>
      </div>
      <span class="footer-right">{{this.nowTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowTime: "",
      input: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  computed: {
    selected() {
      return this.$store.getters.selected;
    }
  },
  mounted() {
    this.getTime();
  },
  methods: {
    //  获取当前时间
    getTime() {
      let myDate = new Date();
      let date =
        myDate.getFullYear() +
        "年" +
        (myDate.getMonth() + 1) +
        "月" +
        myDate.getDate() +
        "日";
      let time =
        (myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()) +
        ":" +
        (myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()) +
        ":" +
        (myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds());
      this.nowTime = date + " \xa0" + time;
    }
  }
};
</script>

<style lang="less" scoped>
.content-panel {
  width: calc(100vw - 200px);
  height: calc(100vh - 80px);
  position: relative;
  // 面包屑
  .content-top {
    width: 100%;
    height: 35px;
    .breadcrumb {
      height: 35px;
      margin-bottom: 0;
      background-color: #eee;
    }
  }
  //  面板内容区域
  .content-center {
    width: 100%;
    height: calc(100vh - 120px);
    box-sizing: border-box;
    padding: 0px 20px 20px 20px;
    background-color: #eee;
    // 内容标题
    .centent-title {
      width: 100%;
      height: 40px;
      background-color: #ccd0d7;
      border-radius: 5px 5px 0 0;
      span {
        font-size: 16px;
        line-height: 40px;
        color: #455f85;
        margin-left: 20px;
      }
    }
    // 内容区域
    .centent-inner {
      width: 100%;
      height: calc(100vh - 215px);
      box-sizing: border-box;
      padding: 20px;
      background-color: #fff;
      //   搜索模块
      .inner-top {
        width: 100%;
        height: 32px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .top-item {
          margin-right: 20px;
        }
        .input-label {
          line-height: 32px;
        }
        .centent-inner-input {
          width: 524px;
          line-height: 32px;
        }
      }
      //   表格模块
    }
  }
  //   内容面板底部
  .content-footer {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: #333333;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    .left-item {
      padding: 0 20px 0 17px;
      display: inline-block;
      position: relative;
      span {
        margin: 0 20px 0 17px;
      }
    }
    .left-item::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fda534;
      position: absolute;
      left: 0px;
      top: 15px;
    }
    .operator::before {
      background-color: #319167;
    }
    .accounting-data::before {
      background-color: #ff3a36;
    }
    .footer-right {
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      text-align: center;
    }
  }
}
</style>