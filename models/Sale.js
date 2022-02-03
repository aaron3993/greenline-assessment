const Sequelize = require("sequelize");
const db = require("../config/database");
const Product = require("./Product");

const Sale = db.define("sale", {
  name: Sequelize.STRING,
});

Sale.hasMany(Product, { as: "products" });
Product.belongsTo(Sale, {
  foreignKey: "companyId",
  as: "company",
});

module.exports = Sale;
