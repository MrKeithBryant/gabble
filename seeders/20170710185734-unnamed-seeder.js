'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
return queryInterface.bulkInsert('Users', usersArray);

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', usersArray);
  }
};
