/**
 * 全局过滤器
 */
import { parseTime } from "@/utils";

const filters = {
  // 时间戳转换为 yyyy-MM-dd mm:hh:ss
  DateTime: function(time) {
    return parseTime(time);
  },
  // 列表filter
  styleStatus: function(status) {
    let res = "";
    switch (status) {
      case 0:
        res = "停用";
        break;
      case 1:
        res = "启用";
        break;
    }
    return res;
  },
  // 资源
  resourceStatus: function(status) {
    let res = "";
    switch (status) {
      case 0:
        res = "禁用";
        break;
      case 1:
        res = "正常";
        break;
    }
    return res;
  }
};

export default filters;
