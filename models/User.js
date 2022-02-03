const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  name: Sequelize.STRING,
});

module.exports = User;
