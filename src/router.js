import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
//导入
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

Vue.use(Router);

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   NProgress.done()
// })
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
      import(/* webpackChunkName: "about" */ "./views/Home.vue")
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
