'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uuid: STRING(255),
      name: STRING(30),
      email: STRING(30),
      phone: STRING(30),
      password: STRING(255),
      status: { type: INTEGER, defaultValue: 0 },
      age: INTEGER,
      group_id: INTEGER,
      create_id: INTEGER,
      create_time: DATE,
      update_id: INTEGER,
      update_time: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
