'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Attachments', [
            {
                url: 'public/p1.jpeg',
                fileName: 'fileName1',
                type: 'jpeg',
                messageId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                url: 'public/p2.jpeg',
                fileName: 'fileName2',
                type: 'jpeg',
                messageId: 1,
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
