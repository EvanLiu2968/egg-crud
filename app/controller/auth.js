'use strict';

const Controller = require('egg').Controller;

/**
 * @controller AuthController 用户权鉴
 */
class LoginController extends Controller {

  /**
   * @summary 用户登录
   * @router post /v1/auth/login
   * @request body loginRequest *body
   * @response 200 baseResponse 创建成功
   */
  async login() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.loginRequest);

    const { account, password } = ctx.request.body;
    const user = await service.user.getUser(1);
    const uuid = user.uuid;
    await ctx.app.redis.set(uuid, JSON.stringify(user));

    ctx.setSuccess({
      token: uuid,
    });

  }

  /**
   * @summary 用户退出登录
   * @router get /v1/auth/logout
   * @request header string accessToken
   * @response 200 baseResponse 操作成功
   */
  async logout() {
    const { ctx, service } = this;

    const token = ctx.request.get('accessToken') || ctx.cookies.get('accessToken');
    await ctx.app.redis.remove(token);
    ctx.session.user = null;

    ctx.setSuccess(null);
  }

  /**
   * @summary 获取登录用户信息
   * @router get /v1/auth/getUser
   * @request header string accessToken
   * @response 200 getUserResponse 用户信息
   */
  async getUser() {
    const { ctx, service } = this;

    ctx.setSuccess(ctx.session.user);
  }

}
module.exports = LoginController;
