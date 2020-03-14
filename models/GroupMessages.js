'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupMessages = sequelize.define('GroupMessages', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    freezeTableName: true,
  });
  GroupMessages.associate = function(models) {
    // associations can be defined here
  };
  return GroupMessages;
};
