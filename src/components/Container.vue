<template>
  <div class="body-container">
    <!-- 顶部 -->
    <div class="header-container">
      <div class="header-content" :style="{backgroundImage: 'url(' + headerBk + ')' }">
        <img class="logo" src="../assets/logo.png" alt />
        <p>现场审计作业云系统</p>
        <div class="tab-nav">
          <ul class="clearfix">
            <li
              class="fl"
              :class="{active:tabIndex==index?isTab:''}"
              v-for="(item ,index) in tabNav"
              :key="index"
              @click="tabSelect(index)"
            >
              <span>{{item.content}}</span>
            </li>
          </ul>
        </div>
        <div class="header-right">
          <div class="right-content clearfix">
            <div class="user-img fl">
              <img src="../assets/logo.png" alt="defalut" />
            </div>
            <div class="fl user-name">
              <span>彭于晏</span>
            </div>
            <div class="fl user-select">
              <el-row class="block-col-2">
                <el-col>
                  <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                      下拉菜单
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        v-for="(item,index) in items"
                        :key="index"
                        :command="item.user"
                        :icon="item.icon"
                      >{{item.user}}</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </div>
            <div class="fl user-login-out">
              <i class="el-icon-switch-button"></i>
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页面 -->
    <div class="body-content">
      <ul class="body-content-ul">
        <li v-show="tabIndex==0">
          <!-- 首页 -->
          <home-page></home-page>
        </li>
        <li v-show="tabIndex==1">
          <!-- 项目管理 -->
          <project-management-page></project-management-page>
        </li>
        <li v-show="tabIndex==2">
          <!-- 数据收集 -->
          <data-collection-page></data-collection-page>
        </li>
        <li v-show="tabIndex==3">
          <!-- 审计分析 -->
          <audit-analysis-page></audit-analysis-page>
        </li>
        <li v-show="tabIndex==4">
          <!-- 审计作业 -->
          <audit-operation-page></audit-operation-page>
        </li>
        <li v-show="tabIndex==5">
          <!-- 辅助工具 -->
          <assistant-tool-page></assistant-tool-page>
        </li>
        <li v-show="tabIndex==6">
          <!-- 系统管理 -->
          <system-management-page></system-management-page>
        </li>
        <li v-show="tabIndex==7">
          <!-- 帮助 -->
          <help-page></help-page>
        </li>
      </ul>
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
import headerBk from "../assets/logoBK.png";
import { parseTime } from "@/utils/index.js";
import HomePage from "../views/homePage/index.vue";
import AssistantToolPage from "../views/assistantToolPage/index.vue";
import AuditAnalysisPage from "../views/auditAnalysisPage/index.vue";
import AuditOperationPage from "../views/auditOperationPage/index.vue";
import DataCollectionPage from "../views/dataCollectionPage/index.vue";
import HelpPage from "../views/helpPage/index.vue";
import ProjectManagementPage from "../views/projectManagementPage/index.vue";
import SystemManagementPage from "../views/systemManagementPage/index.vue";
export default {
  name: "Container",
  components: {
    HomePage,
    AssistantToolPage,
    AuditAnalysisPage,
    AuditOperationPage,
    DataCollectionPage,
    HelpPage,
    ProjectManagementPage,
    SystemManagementPage
  },
  data() {
    return {
      headerBk: headerBk,
      tabIndex: 0,
      isTab: true,
      tabNav: [
        { content: "首页" },
        { content: "项目管理" },
        { content: "数据采集" },
        { content: "审计分析" },
        { content: "审计作业" },
        { content: "辅助工具" },
        { content: "系统管理" },
        { content: "帮助" }
      ],
      items: [
        { id: 0, user: "aaa", icon: "el-icon-plus" },
        { id: 1, user: "bbb", icon: "el-icon-circle-plus" },
        { id: 2, user: "ccc", icon: "el-icon-circle-plus-outline" },
        { id: 3, user: "ddd", icon: "el-icon-circle-check" }
      ],
      nowTime: ""
    };
  },
  mounted() {
    this.nowTime = parseTime(new Date());
  },
  methods: {
    tabSelect(index) {
      let _this = this;
      console.log(index);
      this.tabIndex = index;
      if ((this.tabIndex = index)) {
        _this.isTab = true;
        return false;
      }
    },
    handleCommand(command) {
      console.log(command);
      this.$message(`click on ${command}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.active {
  background: #2f4668;
}
.header-right {
  height: 65px;
  width: 336px;
  position: absolute;
  background: url('../assets/login-bk.png');
  background-size: 100%;
  right: 0;
  bottom: 0;
  padding-top: 22px;
  padding-left: 78px;
  .right-content {
    width: 100%;
    height: 32px;
    .user-img {
      height: 100%;
      width: 28px;
      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-top: 2px;
      }
    }
    .user-name {
      height: 100%;
      line-height: 32px;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      text-align: right;
      padding: 0 16px 0 10px;
    }
    .user-select {
      position: relative;
      height: 100%;
      line-height: 32px;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      text-align: right;
      cursor: pointer;
      .el-dropdown-link {
        font-size: 13px;
        color: #333333;
      }
    }

    .user-login-out {
      height: 100%;
      width: 73px;
      font-size: 16px;
      line-height: 32px;
      margin-left: 10px;
      color: #ffffff;
      letter-spacing: 0;
      position: relative;
      background: #6c8ab6;
      border-radius: 16px;
      text-align: center;
      cursor: pointer;
      img {
        position: absolute;
        top: calc(50% - 7px);
        left: 11px;
        width: 14px;
        height: 14px;
      }
      span {
        padding-left: 6px;
      }
    }
  }
}
.body-container {
  width: 100%;
  height: 100%;
}
.body-content {
  width: 100%;
  height: calc(100% - 120px);
  // height: auto

   .body-content-ul{
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        height: 100%;
      }
    }
  
}
.header-container {
  height: 80px;
  width: 100%;
  .header-content {
    height: 80px;
    position: relative;
    background-size: 100% 100%;
    .logo {
      width: 58.5px;
      height: 58.5px;
      position: absolute;
      left: 22.7px;
      top: calc(50% - 29.25px);
    }
    p {
      position: absolute;
      left: 104px;
      top: 8px;
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 0;
      text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    }
    .tab-nav {
      height: 32px;
      position: absolute;
      widows: 100%;
      bottom: 0;
      left: 0;
      padding-left: 90px;
      ul {
        height: 100%;
        li {
          width: 90px;
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
          margin-right: 20px;
          cursor: pointer;
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }
}
</style>
