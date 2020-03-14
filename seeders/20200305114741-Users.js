'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: 'Luiz',
                age: 1,
                roles: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Rubin',
                age: 2,
                roles: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'VAHAGN',
                age: 25,
                roles: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
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
