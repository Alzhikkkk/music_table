'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Genres', [
      {
         genre: 'Pop',
         createdAt : new Date(),
         updatedAt: new Date()
      },
      {
        genre: 'Juzz',
        createdAt : new Date(),
        updatedAt: new Date()
     },
     {
      genre: 'K-Pop',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
        genre: 'Rock',
        createdAt : new Date(),
        updatedAt: new Date()
    },
    {
      genre: 'Classic',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      genre: 'RnB',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      genre: 'Rap',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      genre: 'Country',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      genre: 'Hip-hop',
      createdAt : new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Genres', null, {});
  }
};
