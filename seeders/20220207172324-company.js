"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Companies", [
      {
        name: "Amazon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bestbuy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Companies", null, {});
  },
};
