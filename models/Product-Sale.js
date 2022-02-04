const Sequelize = require("sequelize");
const db = require("../config/database");
const Product = require("./Product");
const User = require("./User");

const ProductSale = db.define("sale", {
  quantity: Sequelize.NUMBER,
});

ProductSale.hasOne(Product, { as: "product" });
Product.belongsTo(ProductSale, {
  foreignKey: "productId",
  as: "product",
});

module.exports = ProductSale;
