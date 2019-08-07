<template>
  <div class="body-container">
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
      </div>
    </div>
    <div class="body-content">
      <ul>
        <li v-show="tabIndex==0">首页首页</li>
        <li v-show="tabIndex==1">项目管理</li>
        <li v-show="tabIndex==2">数据采集</li>
        <li v-show="tabIndex==3">审计分析</li>
        <li v-show="tabIndex==4">审计作业</li>
        <li v-show="tabIndex==5">辅助工具</li>
        <li v-show="tabIndex==6">系统管理</li>
        <li v-show="tabIndex==7">帮助</li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerBk from "../assets/logoBK.png";
export default {
  name: "Container",
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
      ]
    };
  },
  mounted() {},
  methods: {
    tabSelect(index) {
      let _this = this;
      console.log(index);
      this.tabIndex = index;
      if ((this.tabIndex = index)) {
        _this.isTab = true;
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.active {
  background: #2f4668;
}
.body-container {
  width: 100%;
  height: 100%;
}
.body-content {
  width: 100%;
  height: calc(100% - 80px);
  // height: auto;
 
  .body-content {
    ul {
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.header-container {
  height: 80px;
  width: 100%;
  .header-content {
    height: 80px;
    position: relative;
    .logo {
      width: 58.5px;
      height: 58.5px;
      position: absolute;
      left: 22.7px;
      top: 12px;
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
