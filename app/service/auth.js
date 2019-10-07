'use strict';
const Service = require('egg').Service;

class LoginService extends Service {

  async login(logininfo) {
    const { ctx } = this;
    const { Op } = ctx.app.Sequelize;
    const { account, password } = logininfo;
    const user = await ctx.model.User.findOne({
      where: {
        status: 0,
        [Op.or]: [
          { phone: account },
          { email: account },
        ],
        [Op.and]: [
          { password },
        ],
      },
    });
    if (!user) {
      ctx.throw(500, '帐号名或密码不正确');
    }
    await ctx.app.redis.set(user.uuid, JSON.stringify(user));
    return user.uuid;
  }

  async logout() {
    const { ctx } = this;

    const token = ctx.request.get('accessToken') || ctx.cookies.get('accessToken');
    await ctx.app.redis.remove(token);
    ctx.session.user = null;
  }

  async getUser() {
    const { ctx } = this;

    return ctx.session.user;
  }

}

module.exports = LoginService;
