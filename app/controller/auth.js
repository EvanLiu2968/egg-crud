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

    let user = ctx.request.body;

    ctx.setSuccess(null);

  }

  /**
   * @summary 用户退出登录
   * @router get /v1/auth/logout
   * @response 200 baseResponse 操作成功
   */
  async logout() {
    const { ctx, service } = this;

    ctx.setSuccess(null);
  }

  /**
   * @summary 获取登录用户信息
   * @description 获取登录用户信息
   * @router get /v1/auth/getUser
   * @response 200 getUserResponse 用户信息
   */
  async getUser() {
    const { ctx, service } = this;

    const data = await service.user.getUser(1);
    ctx.setSuccess(data);
  }

}
module.exports = LoginController;
