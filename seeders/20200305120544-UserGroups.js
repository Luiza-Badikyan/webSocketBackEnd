'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('UserGroups', [
            {
                groupId: 1,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                groupId: 1,
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                groupId: 1,
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
