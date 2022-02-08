const Product = require("../models/Product");
const Company = require("../models/Company");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, companyId } = req.body;
    if (!name || !price) {
      return res.status(404).json("A product must have a name and price!");
    }
    const company = await Company.findByPk(companyId);
    if (!company) {
      return res.status(404).json("No company found with this ID!");
    }
    const product = await Product.create({
      name,
      price,
      companyId,
    });
    res.status(200).send(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
