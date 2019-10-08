'use strict';

const Controller = require('egg').Controller;

/**
 * @controller 用户权鉴 AuthControler
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

    const data = await service.auth.login(ctx.request.body);

    ctx.setSuccess(data);

  }

  /**
   * @summary 用户退出登录
   * @router get /v1/auth/logout
   * @request header string accessToken
   * @response 200 baseResponse 操作成功
   */
  async logout() {
    const { ctx, service } = this;

    await service.auth.logout();

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

    const data = await service.auth.getUser();

    ctx.setSuccess(data);
  }

}
module.exports = LoginController;
