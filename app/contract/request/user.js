'use strict';

module.exports = {
  createUserRequest: {
    name: { type: 'string', required: true, description: '用户姓名' },
    sexy: { type: 'string', required: true, enum: ['male', 'female'], description: '用户性别' },
    age: { type: 'integer', required: true, min: 1, description: '年龄' },
    groupId: { type: 'integer', required: true, min: 1, description: '用户组id' },
    email: { type: 'string', required: false, example: 'evanliu2968@gmail.com', format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
    phone: { type: 'string', required: false, example: '17620020362', format: /^1[34578]\d{9}$/, description: '电话' },
  },

  updateUserRequest: {
    name: { type: 'string', required: false, description: '用户姓名' },
    sexy: { type: 'string', required: false, enum: ['male', 'female'], description: '用户性别' },
    age: { type: 'integer', required: false, min: 1, description: '年龄' },
    groupId: { type: 'integer', required: false, min: 1, description: '用户组id' },
    email: { type: 'string', required: false, example: 'evanliu2968@gmail.com', format: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, description: '邮箱' },
    phone: { type: 'string', required: false, example: '17620020362', format: /^1[34578]\d{9}$/, description: '电话' },
  },
};
