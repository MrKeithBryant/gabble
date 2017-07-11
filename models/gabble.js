'use strict';
module.exports = function(sequelize, DataTypes) {
  var gabble = sequelize.define('gabble', {
    name: DataTypes.STRING,
    music: DataTypes.OBJECT,
    info: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gabble;
};