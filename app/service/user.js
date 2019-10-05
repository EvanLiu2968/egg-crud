'use strict';
const Service = require('egg').Service;
const UUID = require('uuid');

let User = [];

class UserService extends Service {

  async createUser(user) {

    return this.ctx.model.User.create(Object.assign({ uuid: UUID.v1() }, user));
  }

  async queryUser({ offset = 0, limit = 10 }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ 'create_time', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async getUser(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }


  async delUser(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }

  async updateUser(id, updates) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }
}

module.exports = UserService;
