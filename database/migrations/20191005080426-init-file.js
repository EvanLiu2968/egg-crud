'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('file', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      file_name: STRING(255),
      file_url: STRING(255),
      file_type: STRING(30),
      file_size: INTEGER,
      create_id: INTEGER,
      create_time: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('file');
  }
};
