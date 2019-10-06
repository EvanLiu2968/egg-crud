'use strict';

module.exports = {
  loginRequest: {
    account: { type: 'string', required: true, description: '登录帐号，用户手机号码或手机邮箱' },
    password: { type: 'string', required: true, description: '登录密码' },
  },
};
