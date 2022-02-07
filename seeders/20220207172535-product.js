"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Products", [
      {
        name: "Laptop",
        price: 500,
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desktop",
        price: 1000,
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
