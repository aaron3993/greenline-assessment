const Company = require("../models/Company");

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).send(companies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json("A company must have a name!");
    }
    const companies = await Company.create({
      name,
    });
    res.status(200).send(companies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
