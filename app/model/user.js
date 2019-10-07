'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, UUIDV1 } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uuid: { type: STRING(255), defaultValue: UUIDV1 },
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

  User.prototype.associate = function() {
    app.model.User.hasMany(app.model.UserGroup, { as: 'group' });
  };

  User.sync({ alter: true });

  return User;
};
