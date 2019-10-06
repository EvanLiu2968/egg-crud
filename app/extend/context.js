'use strict';

/*
 * 统一接口返回数据模型
 */
const codeMsg = {
  0: '请求成功',
  // 系统异常错误 01-10
  1: '服务异常',
  // 请求参数错误 11-20
  11: '请求参数为空',
  12: '请求参数错误',
  // 权限错误 21-30
  21: '您尚未登录，请登录后继续操作',
  22: '您没有权限访问',
  23: '签名验证错误',
  24: 'Token已失效',
  25: 'Session已失效',
  26: '您的账号在其它地方登录，请重新登录或者修改密码',
  // 预留错误类型 31-50
  31: '未知错误',
  // 表单/参数校验错误 51+
  51: '用户信息不存在',
  52: '用户名已存在',
  53: '手机号已存在',
  54: '邮箱已存在',
  55: '用户未激活',
  56: '用户未激活',
  57: '用户已禁用',
  58: '用户已冻结',
  59: '用户已注销',
  61: '用户名或密码错误',
  62: '验证码错误',
  63: '两次输入密码不一致',
  64: '姓名与身份证号码不匹配',
};
// this === ctx
module.exports = {
  setResponse(code, data, message) {
    const ctx = this;
    code = code || 0;
    message = message || codeMsg[code];
    data = data || null;
    ctx.status = 200;
    ctx.body = {
      code: code,
      message: message,
      data,
    };
  },
  setSuccess(data, query) {
    const ctx = this;
    if (query && query.limit) {
      const { offset = 0, limit = 10 } = query;
      data = {
        page: offset / limit + 1,
        size: limit,
        total: data ? data.count : 0,
        records: data ? data.rows : [],
      };
    }
    ctx.setResponse(0, data);
  },
  setError(e) {
    const ctx = this;
    ctx.setResponse(1);
    if (e) {
      console.log(e.stack);
      ctx.logger.error(e.stack);
    }
  },
  setDeny() {
    const ctx = this;
    ctx.setResponse(22);
  },
  formatPager(query = {}) {
    let page = Number(query.page || 1);
    let size = Number(query.size || 10);
    return {
      offset: (page - 1) * size,
      limit: size,
    };
  },
};
