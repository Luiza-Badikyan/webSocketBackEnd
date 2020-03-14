'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Group', [
            {
                name: 'FrontEndDevelopers',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'BackEndDevelopers',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'FullStackDevelopers',
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
