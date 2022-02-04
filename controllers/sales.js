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
    // products = [
    //   {
    //     productId: 1,
    //     quantity: 2
    //   }
    // ]

    const sale = await Sale.create({
      user: req.body.userId,
    });
    for (const product of req.body.products) {
      await ProductSale.create({
        productId: product.productId,
        quantity: product.quantity,
      });
      sale.productSales.push(productId);
      await sale.save();
    }

    // also create a product-sale for each item bought
    res.status(200).send(sale);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
