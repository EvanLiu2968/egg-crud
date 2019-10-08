'use strict';

const pathToRegexp = require('path-to-regexp');
const whiteApiList = [
  '/v1/auth/login',
  '/v1/common/getGift',
  '/v1/common/upload',
];
function requireAuthApi(path) {
  if (!/^\/v1\//.test(path)) return false;
  for (let i = 0; i < whiteApiList.length; i++) {
    const reg = pathToRegexp(whiteApiList[i]);
    if (reg.test(path)) {
      return false;
    }
  }
  return true;
}

module.exports = (option, app) => {
  return async function(ctx, next) {
    const token = ctx.request.get('accessToken') || ctx.cookies.get('accessToken');
    if (token) {
      const user = await app.redis.get(token);
      if (user) {
        ctx.session.user = JSON.parse(user);
      }
    } else {
      ctx.session.user = null;
    }
    if (!ctx.session.user && requireAuthApi(ctx.path)) {
      ctx.setResponse(21);
    } else {
      await next();
    }
  };
};
