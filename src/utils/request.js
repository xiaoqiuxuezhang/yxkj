//引入axios
const api = process.env.VUE_APP_API_URL;
import store from "@/store";
import router from "@/store";
import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";

axios.defaults.baseURL = api;
//设置默认请求头
axios.defaults.headers = {
  "Content-Type": "application/x-www-form-urlencoded"
};
axios.defaults.timeout = 10000;

let cancel,
  promiseArr = {};
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(
  config => {
    //发起请求时，取消掉当前正在进行的相同请求

    if (promiseArr[config.url]) {
      promiseArr[config.url]("600");
      promiseArr[config.url] = cancel;
    } else {
      promiseArr[config.url] = cancel;
    }
    config.headers["x-access-token"] = store.state.user.token;
    store.dispatch("setLoading", true);
    return config;
  },
  error => {
    setTimeout(function() {
      store.dispatch("setLoading", 0);
    }, 300);
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    store.dispatch("setLoading", false);
    if (response.data.status == 200) {
      return response;
    } else {
      Message.error(
        `请求异常: ${response.data.msg} (code: ${response.data.status})`
      );
      switch (response.data.status) {
        case 201002:
        case 201003:
        case 201004:
          store.dispatch("cleanUserInfo").then(() => {
            router.push({ path: "/login" });
          });
          break;

        default:
          break;
      }
    }
  },
  err => {
    if (err.message == '600') {
      store.dispatch("setLoading", false);
      console.warn('请勿同时请求多个相同接口, 防止数据混乱!');
      return Promise.resolve(err.response);
    }
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "未授权，请重新登录";
          break;
        case 403:
          err.message = "拒绝访问";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
    } else {
      err.message = "连接到服务器失败";
    }
    store.dispatch("setLoading", false);
    Message.error(err.message);
    console.error(err.message);
    return Promise.resolve(err.response);
  }
);
// 网络检测监听

// 在线关闭提示
window.addEventListener("online", () => {
  Message.closeAll();
}, false);

// 离线始终提示
window.addEventListener("offline", () => {
  Message.error({
    message: '检测到网络连接异常, 请检查网络连接及DNS解析是否正常! ',
    duration: 0
  });
  
}, false);
export default {
  //get请求
  get(url, param) {
    return new Promise(resolve => {
      axios({
        method: "get",
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        resolve(res.data);
      });
    });
  },
  //post请求
  post(url, param) {
    return new Promise(resolve => {
      axios({
        method: "post",
        url,
        data: qs.stringify(param),
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        resolve(res.data);
      });
    });
  },
  //post file请求
  upFile(url, fd) {
    return new Promise(resolve => {
      axios
        .post(url, fd, { headers: { "Content-Type": "multipart/form-data" } })
        .then(res => {
          resolve(res.data);
        });
    });
  }
};
