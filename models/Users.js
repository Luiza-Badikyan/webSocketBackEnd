'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    roles: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
