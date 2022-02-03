const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("./User");
const Product = require("./Product");

const Company = db.define("company", {
  name: Sequelize.STRING,
});

Company.hasMany(User, { as: "users" });
Company.hasMany(Product, { as: "products" });
Product.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company",
});
User.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company",
});

module.exports = Company;
