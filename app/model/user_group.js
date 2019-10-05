'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UserGroup = app.model.define('user_group', {
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

  // UserGroup.associate = function() {
  //   app.model.UserGroup.belongsTo(app.model.User, { as: 'user', foreignKey: 'group_id' });
  // };

  // UserGroup.findByIdWithUser = async function(id, groupId) {
  //   return await this.findOne({
  //     where: { id, group_id: groupId },
  //   });
  // };

  return UserGroup;
};
