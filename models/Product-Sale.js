const Sequelize = require("sequelize");
const db = require("../config/database");
const Product = require("./Product");
const User = require("./User");

const ProductSale = db.define("productSale", {
  quantity: Sequelize.NUMBER,
});

Product.hasMany(ProductSale, { as: "productSales" });
ProductSale.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

module.exports = ProductSale;
