const Sale = require("../models/Sale");

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.status(200).send(sales);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createSale = async (req, res) => {
  try {
    const sales = await Sale.create({
      user: req.body.userId,
      // products:
    });
    res.status(200).send(sales);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
