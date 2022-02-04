const Product = require("../models/Product");

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
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      companyId: req.body.companyId,
    });
    res.status(200).send(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
