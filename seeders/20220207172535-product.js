"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("products", [
      {
        name: "Book",
        price: 50,
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Table",
        price: 100,
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Laptop",
        price: 500,
        companyId: 2,
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
    return queryInterface.bulkDelete("products", null, {});
  },
};
