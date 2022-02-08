const User = require("../models/User");
const Company = require("../models/Company");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, companyId } = req.body;
    if (!name) {
      return res.status(404).json("A user must have a name!");
    }
    const company = await Company.findByPk(companyId);
    if (!company) {
      return res.status(404).json("No company found with this ID!");
    }
    const users = await User.create({
      name,
      companyId,
    });
    res.status(200).send(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
