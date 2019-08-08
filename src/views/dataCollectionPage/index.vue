<template>
  <div class="data-collection-page page-wrap">
    <!-- 左侧树形菜单 -->
    <tree></tree>
    <!-- 右侧内容区域 -->
    <div class="content-panel">
      <!-- 面包屑 -->
      <div class="content-top">
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">审计分析</el-breadcrumb-item>
          <el-breadcrumb-item>财政审计</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 面板内容 -->
      <div class="content-center">
        <div class="centent-title">
          <span>审计作业</span>
        </div>
        <div class="centent-inner">{{selected}}</div>
      </div>
    
    </div>
  </div>
</template>

<script>
import Tree from "@/components/Tree";
import { parseTime } from "@/utils/index.js";
export default {
  components: {
    Tree
  },
  data() {
    return {
      // 当前时间
      nowTime: ""
    };
  },
  computed: {
    selected() {
      return this.$store.getters.selected;
    }
  },
  mounted() {
    this.nowTime = parseTime(new Date());
  }
};
</script>

<style lang="less" scoped>
</style>