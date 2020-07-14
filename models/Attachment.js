'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define('Attachment', {
    url: DataTypes.STRING,
    fileName: DataTypes.STRING,
    type: DataTypes.STRING,
    messageId: DataTypes.INTEGER
  }, {});
  Attachment.associate = function(models) {
    // associations can be defined here
  };
  return Attachment;
};