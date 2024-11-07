'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('TREINADOR', {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allownull: false,
      },
      numeroPokemon: {
        type: Sequelize.INTEGER,
        allownull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allownull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TREINADOR');
  }
};
