'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('GroupMessages', [
            {
                userId: 1,
                groupId: 1,
                message: 'message 1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userId: 1,
                groupId: 1,
                message: 'message 2',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userId: 1,
                groupId: 1,
                message: 'message 3',
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
