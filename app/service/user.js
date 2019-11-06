'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  async createUser(user) {
    // 手机号码和邮箱必填一个，且两者都不能有重复
    const { phone, email } = user;
    if (phone) {
      const data = await this.ctx.model.User.findOne({
        where: {
          phone,
        },
      });
      if (data) {
        this.ctx.throw(500, '不能提交重复手机号码');
      }
    }
    if (email) {
      const data = await this.ctx.model.User.findOne({
        where: {
          email,
        },
      });
      if (data) {
        this.ctx.throw(500, '不能提交重复邮箱');
      }
    }
    user.group_id = user.groupId;
    user.create_id = this.ctx.session.user.id;
    user.update_id = this.ctx.session.user.id;
    return await this.ctx.model.User.create(user);
  }

  async queryUser({ offset = 0, limit = 10, status = 0, keyword = '' }) {
    const { Op } = this.ctx.app.Sequelize;
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ 'create_time', 'desc' ], [ 'id', 'desc' ]],
      where: {
        status,
        [Op.or]: [
          { name: { [Op.like]: `%${keyword}%` } },
          { phone: { [Op.like]: `%${keyword}%` } },
          { email: { [Op.like]: `%${keyword}%` } },
        ],
      },
    });
  }

  async getUser(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, '没有找到该用户');
    }
    return user;
  }


  async delUser(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, '没有找到该用户');
    }
    return user.destroy();
  }

  async updateUser(id, updates) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, '没有找到该用户');
    }
    updates.update_id = this.ctx.session.user.id;
    return user.update(updates);
  }
}

module.exports = UserService;
