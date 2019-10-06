'use strict';

module.exports = {
  queryUserResponse: {
    users: { type: 'array', itemType: 'user' },
    page: { type: 'integer' },
    size: { type: 'integer' },
    totalCount: { type: 'integer' },
  },
  getUserResponse: {
    id: { type: 'string', description: 'id 唯一键' },
    name: { type: 'string', description: '用户姓名' },
    sexy: { type: 'string', description: '用户性别' },
    age: { type: 'integer', description: '年龄' },
    groupId: { type: 'integer', description: '用户组id' },
    email: { type: 'string', description: '邮箱' },
    phone: { type: 'string', description: '手机号码' },
  },
};
