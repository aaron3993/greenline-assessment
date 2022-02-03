const User = require("../models/User");

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
    const users = await User.create({
      name: req.body.name,
      companyId: req.body.companyId,
    });
    res.status(200).send(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
