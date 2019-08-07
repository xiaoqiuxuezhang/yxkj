import router from "@/router";
import { getToken } from "./auth";
import store from "@/store";
import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; // 进度条样式
import { Message } from "element-ui";

export function userPermisson() {
  const whiteList = ["/login", "/403", "/"]; // 不重定向白名单
  router.beforeEach((to, from, next) => {
    NProgress.start();
    let userInfo = getToken();
    // 判断有没有用户信息
    if (userInfo.id) {
      if (to.path === "/login") {
        next({
          path: "/"
        });
        NProgress.done();
      } else {
        // 访问权限调整
        let userInfo = getToken();
        let menuList = [];
        userInfo.menuList.forEach(item => { item.childMenu.forEach(c => { menuList.push(c.path); }); }); // 输出menulist中的path
        // 判断
        if (menuList.includes(to.path) || menuList.includes(to.meta.requiresParent) || whiteList.includes(to.path)) {
          store.dispatch('setBreadcrumb', to.meta.breadcrumb || []).then(res => {
            next();
          });
        } else {
          // 如果在router中跳转403， 否则跳转404
          if (router.options.routes[2].children.findIndex(item => item.path == to.path) > -1) {
            next('/403');
          } else {
            next();
          }
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        next();
      } else {
        Message.error("登录状态失效，请重新登录");
        next("/login");
        NProgress.done();
      }
    }
  });

  router.afterEach(() => {
    NProgress.done(); // 结束Progress
  });
}
