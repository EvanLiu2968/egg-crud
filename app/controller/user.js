'use strict';

const Controller = require('egg').Controller;

/**
 * @controller UserController 用户
 */
class UserController extends Controller {

  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/user/createUser
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createUserRequest);

    let user = ctx.request.body;

    const data = await service.user.createUser(user);
    ctx.setSuccess(data);
  }

  /**
   * @summary 获取用户列表
   * @router get /v1/user/getUsers
   * @request query integer page 页码 默认 1
   * @request query integer size 单页数量 默认 10
   * @response 200 queryUserResponse successed
   */
  async query() {
    const { ctx, service } = this;

    const query = ctx.formatPager(ctx.query);

    const data = await service.user.queryUser(query);
    ctx.setSuccess(data, query);
  }

  /**
   * @summary 根据id获取用户
   * @router get /v1/user/getUserById/{id}
   * @request path string *id
   * @response 200 getUserResponse 用户信息
   */
  async get() {
    const { ctx, service } = this;
    let id = ctx.params.id;

    const data = await service.user.getUser(id);
    ctx.setSuccess(data);
  }

  /**
   * @summary 删除用户
   * @description 删除用户信息
   * @router delete /v1/user/deleteUser/{id}
   * @request path string *id
   * @response 200 baseResponse 删除成功
   */
  async delete() {
    const { ctx, service } = this;

    let id = ctx.params.id;

    const data = await service.user.delUser(id);
    ctx.setSuccess(data);
  }

  /**
   * @summary 更新用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router put /v1/user/updateUser/{id}
   * @request path string *id
   * @request body updateUserRequest *body
   * @response 200 user 更新成功
   */
  async update() {
    const { ctx, service } = this;
    let id = ctx.params.id;
    // 校验参数
    ctx.validate(ctx.rule.updateUserRequest);

    const data = await service.user.updateUser(id, ctx.request.body);
    ctx.setSuccess(data);
  }

}
module.exports = UserController;
