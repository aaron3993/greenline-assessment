const Product = require("../models/Product");
const ProductSale = require("../models/Product-Sale");
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
