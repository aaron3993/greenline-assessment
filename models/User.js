const Sequelize = require("sequelize");
const db = require("../config/database");
const Sale = require("../models/Sale");

const User = db.define("user", {
  name: Sequelize.STRING,
});

User.hasMany(Sale, { as: "sales" });
Sale.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = User;
