'use strict';

module.exports = {
  createGroupRequest: {
    groupName: { type: 'string', required: true, min: 1, description: '组名' },
    note: { type: 'string', required: true, min: 1, description: '备注' },
  },

  updateGroupRequest: {
    groupName: { type: 'string', required: true, min: 1, description: '组名' },
    note: { type: 'string', required: true, min: 1, description: '备注' },
    status: { type: 'integer', required: true, enum: [0, 1], description: '启用状态' },
  },
};
