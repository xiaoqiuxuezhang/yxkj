<template>
  <div class="tree">
    <el-tree
      ref="tree"
      accordion
      node-key="id"
      :current-node-key="currentNodekey"
      :data="treeData"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>
<script>
export default {
  name: "Tree",
  data() {
    return {
      treeData: [
        {
          label: "电子数据管理11111112wafsafasfasas",
          id: 1
        },

        {
          label: "账表分析",
          id: 2,
          children: [
            {
              label: "二级 2-1",
              id: 3,
              children: [
                {
                  label: "三级 3-1-1",
                  id: 4,
                  children: [
                    {
                      label: "四级 4-1-1",
                      id: 5,
                      children: [
                        {
                          label: "五级 5-1-1asdasdasdaaasda",
                          id: 6
                        },
                        {
                          label: "五级 5-1-2",
                          id: 7
                        }
                      ]
                    },
                    {
                      label: "四级 4-1-2",
                      id: 8
                    }
                  ]
                }
              ]
            },
            {
              label: "二级 2-2",
              id: 9,
              children: [
                {
                  label: "三级 2-2-1",
                  id: 10
                }
              ]
            }
          ]
        },

        {
          label: "数据分析",
          id: 11
        },
        {
          label: "审计方法",
          id: 12,
          children: [
            {
              label: "二级 3-1",
              id: 13,
              children: [
                {
                  label: "三级 3-1-1",
                  id: 14
                }
              ]
            },
            {
              label: "二级 3-2",
              id: 15,
              children: [
                {
                  label: "三级 3-2-1",
                  id: 16
                }
              ]
            }
          ]
        },
        {
          label: "疑点管理",
          id: 17
        },
        {
          label: "账表模板维护",
          id: 18
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      currentNodekey: ""
    };
  },
  mounted() {
    if (this.treeData.length > 0) {
      this.$nextTick(() => {
        this.$store.dispatch("selected", this.treeData[0]);
        // this.currentNodekey = this.treeData[0].id;
        // console.log(this.currentNodekey)
        // this.$refs.tree.setCurrentKey(this.currentNodekey);
      });
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      this.$store.dispatch("selected", data);
    }
  }
};
</script>
<style lang="less" scoped>
.tree{
  height: 100%;
}
.el-tree {
  width: 200px;
  height: 100%;
  background: #455f85;
  font-size: 14px;
  line-height: 20px;
  overflow-y:auto; 
  &/deep/.el-tree-node__content {
    height: 44px;
    line-height: 20px;
    font-family: PingFangSC-Regular;
    background-color: #455f85;
    color: #fff;
  }
  &/deep/.el-tree-node__content:hover {
    background: #2e4668;
  }
  &/deep/.el-tree-node:focus > .el-tree-node__content {
    background: #58739a;
    color: #eecc13;
  }
  &/deep/.el-tree-node__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>


