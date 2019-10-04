'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  async createGroup(group) {
    const db = this.app.mysql;
    const now = new Date().getTime();
    console.log(now);
    let data = {
      group_name: group.groupName,
      create_id: 0,
      // create_time: now,
      update_id: 0,
      note: group.note,
    };

    const result = await db.insert('user_group', data);
    const insertSuccess = result.affectedRows === 1;
    if (insertSuccess) {
      return Object.assign({
        id: insertSuccess.insertId,
      }, data);
    }

  }

  async getGroups() {
    const db = this.app.mysql;

    const results = await db.select('user_group', {
      where: { status: 0 },
      orders: [['id', 'desc']],
      limit: 10,
      offset: 0,
    });

    return {
      results,
    };
  }
}

module.exports = UserService;
