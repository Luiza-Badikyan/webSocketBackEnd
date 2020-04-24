'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                first_name: 'Luiza',
                last_name: 'Badikyan',
                date_of_birth: new Date(),
                email: 'lll@gmail.com',
                password: '$2a$10$/TACsXMO74X2x/MCEjK0lub3FvrULLFFNb9KKTiN77uTQrpRWXxw.',
                roles: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                first_name: 'Oli',
                last_name: 'Harutyunyan',
                date_of_birth: new Date(),
                email: 'ooo@gmail.com',
                password: '$2a$10$/TACsXMO74X2x/MCEjK0lub3FvrULLFFNb9KKTiN77uTQrpRWXxw.',
                roles: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                first_name: 'Suro',
                last_name: 'Avdalyan',
                email: 'sss@gmail.com',
                password: '$2a$10$/TACsXMO74X2x/MCEjK0lub3FvrULLFFNb9KKTiN77uTQrpRWXxw.',
                date_of_birth: new Date(),
                roles: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                first_name: 'Vahagn',
                last_name: 'Araqelyan',
                email: 'vvv@gmail.com',
                password: '$2a$10$/TACsXMO74X2x/MCEjK0lub3FvrULLFFNb9KKTiN77uTQrpRWXxw.',
                date_of_birth: new Date(),
                roles: 1,
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
