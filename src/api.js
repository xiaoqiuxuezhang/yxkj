import req from './utils/request'


export const wxLogin = param => { return req.get('wx/login',param) } // 微信登录