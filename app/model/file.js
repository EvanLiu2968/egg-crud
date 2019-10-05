'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const File = app.model.define('file', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    file_name: STRING(255),
    file_url: STRING(255),
    file_type: STRING(30),
    file_size: INTEGER,
    create_id: INTEGER,
    create_time: DATE,
  });

  return File;
};
