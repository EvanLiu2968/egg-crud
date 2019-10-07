'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_group', [
      {
        id: 1,
        group_name: '管理员',
        code: 'admin',
        note: '管理员分组'
      },
      {
        id: 2,
        group_name: '普通用户',
        code: 'normal',
        note: '普通用户分组'
      }
    ], {
      // forces: true
    });
  },

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    // 删除user_group表id为1 2的记录
    return queryInterface.bulkDelete('user_group', { id: { [Op.in]: [1, 2] } }, {});
  }
};
