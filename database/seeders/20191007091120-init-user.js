'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      id: 1,
      name: '管理员',
      phone: 'admin',
      email: 'evanliu2968@gmail.com',
      groud_id: 1
    }], {
      // forces: true
    });
  },

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('user', { id: { [Op.in]: [1] } }, {});
  }
};
