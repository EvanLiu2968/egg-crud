'use strict';

module.exports = {
  baseResponse: {
    code: { type: 'number', required: true, default: 0 },
    message: { type: 'string', default: '请求成功' },
    data: { type: 'object', default: null },
  },
};
