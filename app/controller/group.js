'use strict';

const Controller = require('egg').Controller;

/**
 * @controller GroupController 用户组
 */
class GroupController extends Controller {

  /**
   * @summary 新增用户组
   * @description 新增用户组
   * @router post /v1/createGroup
   * @request body createGroupRequest *body
   * @response 200 createGroupResponse 创建成功
   */
  async createGroup() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createGroupRequest);

    let group = ctx.request.body;

    ctx.body = await service.group.createGroup(group);

  }

  /**
   * @summary 获取用户组列表
   * @description 获取用户组列表
   * @router get /v1/groups
   * @request query integer pageNo 页码 默认 1
   * @request query integer pageSize 单页数量 默认 10
   * @response 200 getLeaderByGroupResponse 用户信息
   */
  async getGroups() {
    const { ctx, service } = this;

    let groupName = String(ctx.query.groupName || '');
    let pageNo = Number(ctx.query.pageNo || 1);
    let pageSize = Number(ctx.query.pageSize || 10);

    ctx.body = await service.group.getGroups({
      groupName,
      pageNo,
      pageSize,
    });
  }

}
module.exports = GroupController;
