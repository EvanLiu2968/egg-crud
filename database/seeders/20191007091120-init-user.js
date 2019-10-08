'use strict';

const UUID = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [{
      id: 1,
      uuid: UUID.v1(),
      name: '管理员',
      phone: 'admin',
      email: 'evanliu2968@gmail.com',
      password: '123456',
      group_id: 1
    }], {
      // forces: true
    });
  },

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('user', { id: { [Op.in]: [1] } }, {});
  }
};
