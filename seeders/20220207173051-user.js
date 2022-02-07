"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Users", [
      {
        name: "Aaron",
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John",
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
