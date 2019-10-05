'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user_group', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      group_name: STRING(30),
      status: { type: INTEGER, defaultValue: 0 },
      code: STRING(30),
      note: STRING(255),
      create_id: INTEGER,
      create_time: DATE,
      update_id: INTEGER,
      update_time: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_group');
  }
};
