'use strict';
module.exports = (sequelize, DataTypes) => {
    const GroupMessages = sequelize.define('GroupMessages', {
        userId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER,
        message: DataTypes.TEXT,
    }, {
        freezeTableName: true,
    });
    GroupMessages.associate = function (models) {
        GroupMessages.belongsTo(models.Users, {foreignKey: 'userId', as: 'user'});
        GroupMessages.belongsTo(models.Group, {foreignKey: 'groupId', as: 'group'});
        GroupMessages.hasMany(models.Attachment, {foreignKey: 'messageId', as: 'attachment'})
    };
    return GroupMessages;


};

// npx sequelize-cli model:generate --name Attachment --attributes url:string,fileName:string,type:string,messageId:number

// npx sequelize-cli seed:generate --name attachment

// npx sequelize db:seed --seed 20200425084215-Attachments.js