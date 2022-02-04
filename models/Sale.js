const Sequelize = require("sequelize");
const db = require("../config/database");
const ProductSale = require("./Product-Sale");
const User = require("./User");

const Sale = db.define("sale", {
  total: Sequelize.NUMBER,
});

Sale.hasMany(ProductSale, { as: "productSales" });
ProductSale.belongsTo(Sale, {
  foreignKey: "productSaleId",
  as: "product",
});
Sale.hasOne(User, { as: "user" });
User.belongsTo(Sale, {
  foreignKey: "userId",
  as: "user",
});

module.exports = Sale;
