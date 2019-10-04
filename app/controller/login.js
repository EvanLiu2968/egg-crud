'use strict';

const Controller = require('egg').Controller;

/**
 * @controller LoginController 用户权鉴
 */
class LoginController extends Controller {

  /**
   * @summary 登录
   * @description 用户登录
   * @router post /v1/login
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async login() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createUserRequest);

    let user = ctx.request.body;

    ctx.body = await service.user.createUser(user);

  }

  /**
   * @summary 退出登录
   * @description 用户退出登录
   * @router get /v1/logout
   * @response 200 baseResponse 操作成功
   */
  async logout() {
    const { ctx, service } = this;

    let pageNo = Number(ctx.query.pageNo || 1);
    let pageSize = Number(ctx.query.pageSize || 20);

    ctx.body = await service.user.queryUser(pageNo, pageSize);
  }

  /**
   * @summary 获取登录用户信息
   * @description 获取登录用户信息
   * @router get /v1/getUser
   * @response 200 getUserResponse 用户信息
   */
  async getUser() {
    const { ctx, service } = this;

    ctx.body = await service.user.getUser(0);
  }

}
module.exports = LoginController;
