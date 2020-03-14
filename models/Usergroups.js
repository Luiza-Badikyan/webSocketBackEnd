'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroups = sequelize.define('UserGroups', {
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  UserGroups.associate = function(models) {
    // associations can be defined here
  };
  return UserGroups;
};