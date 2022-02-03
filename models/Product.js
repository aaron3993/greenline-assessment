const Sequelize = require("sequelize");
const db = require("../config/database");

const Product = db.define("product", {
  name: Sequelize.STRING,
});

module.exports = Product;
