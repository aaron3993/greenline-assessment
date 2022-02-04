const Sequelize = require("sequelize");
const db = require("../config/database");
const ProductSale = require("../models/Product-Sale");

const Product = db.define("product", {
  name: Sequelize.STRING,
  price: Sequelize.NUMBER,
});

// Product.hasMany(ProductSale, { as: "productSales" });
// ProductSale.belongsTo(Product, {
//   foreignKey: "productId",
//   as: "product",
// });

module.exports = Product;
