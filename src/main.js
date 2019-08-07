import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
// 公共样式
import "element-ui/lib/theme-chalk/index.css";
import "@/style/index.css";
import "@/style/base.css";

Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
