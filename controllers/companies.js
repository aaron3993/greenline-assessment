const Company = require("../models/Company");

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    console.log({ companies });
    res.status(200).send(companies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const companies = await Company.create({
      name: req.body.name,
    });
    res.status(200).send(companies);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
