'use strict';

const Controller = require('egg').Controller;

/**
 * @controller GroupController 用户组
 */
class GroupController extends Controller {

  /**
   * @summary 新增用户组
   * @router post /v1/group/createGroup
   * @request body createGroupRequest *body
   * @response 200 createGroupResponse 创建成功
   */
  async createGroup() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createGroupRequest);

    let group = ctx.request.body;

    const data = await service.group.createGroup(group);
    ctx.setSuccess(data);
  }

  /**
   * @summary 获取用户组列表
   * @router get /v1/group/getGroups
   * @request query integer page 页码 默认 1
   * @request query integer size 单页数量 默认 10
   * @response 200 getGroupResponse 用户组信息
   */
  async getGroups() {
    const { ctx, service } = this;

    const query = ctx.formatPager(ctx.query);

    const data = await service.group.queryGroup(query);
    ctx.setSuccess(data, query);
  }

}
module.exports = GroupController;
