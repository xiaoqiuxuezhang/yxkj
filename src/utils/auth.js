import Cookies from "js-cookie";

const USER_INFO = "USER_INFO";

export function getToken() {
  return JSON.parse(Cookies.get(USER_INFO) || "{}") || {};
}

export function setToken(ui) {
  return Cookies.set(USER_INFO, JSON.stringify(ui));
}

export function removeToken() {
  return Cookies.remove(USER_INFO);
}
