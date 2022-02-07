const Company = require("../models/Company");
const Product = require("../models/Product");
const ProductSale = require("../models/Product-Sale");
const Sale = require("../models/Sale");
const sequelize = require("sequelize");
const User = require("../models/User");

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.status(200).json(sales);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getTotalSalesByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const users = await User.findAll({ where: { companyId } });
    const userIds = users.map((user) => user.id);
    const sales = await Sale.findAll({ where: { userId: userIds } });
    const total = sales.reduce((a, b) => Number(a.total) + Number(b.total));
    res.status(200).json(total);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createSale = async (req, res) => {
  try {
    const { userId, products } = req.body;
    const sale = await Sale.create({
      userId,
    });
    const productSales = [];
    let totalAmount = 0;
    for (const product of products) {
      const productObj = await Product.findByPk(product.productId);
      totalAmount += productObj.price * product.quantity;
      const newProductSale = await ProductSale.create({
        productId: product.productId,
        quantity: product.quantity,
        saleId: sale.id,
      });
      sale.total = totalAmount;
      await sale.save();
      productSales.push(newProductSale);
    }
    res.status(200).json({ sale, productSales });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
