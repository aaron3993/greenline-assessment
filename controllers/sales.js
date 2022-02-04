const Company = require("../models/Company");
const Product = require("../models/Product");
const ProductSale = require("../models/Product-Sale");
const Sale = require("../models/Sale");
const sequelize = require("sequelize");
const User = require("../models/User");

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.status(200).send(sales);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// exports.getTotalSalesByCompany = () =>
//   Sale.findAll({
//     attributes: [[sequelize.fn("sum", sequelize.col("total")), "totalAmount"]],
//   });

exports.getTotalSalesByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const users = await User.findAll({ where: { companyId } });
    const userIds = users.map((user) => user.id);
    const sales = await Sale.findAll({ where: { userId: userIds } });

    res.status(200).send(sales);
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
    res.status(200).send({ sale, productSales });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
