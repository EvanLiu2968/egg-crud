'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  async createGroup(group) {
    const Group = new this.ctx.model.UserGroup();
    Group.group_name = group.groupName;
    Group.note = group.note;
    return Group.save();
  }

  async queryGroup({ offset = 0, limit = 10 }) {
    return await this.ctx.model.UserGroup.findAndCountAll({
      offset,
      limit,
      order: [[ 'create_time', 'desc' ], [ 'id', 'desc' ]],
    });
  }
}

module.exports = UserService;
