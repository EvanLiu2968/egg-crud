'use strict';

module.exports = {
  login: {
    token: { type: 'string', description: '用户token' },
  },

  getUser: {
    id: { type: 'string', description: 'id 唯一键' },
    name: { type: 'string', description: '用户姓名' },
    sexy: { type: 'string', description: '用户性别' },
    age: { type: 'integer', description: '年龄' },
    groupId: { type: 'integer', description: '用户组id' },
    email: { type: 'string', description: '邮箱' },
    phoneNumber: { type: 'string', description: '电话' },
  },

};
