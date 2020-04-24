'use strict';
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        roles: DataTypes.INTEGER
    }, {});
    Users.associate = function (models) {
        // associations can be defined here
    };
    return Users;
};
