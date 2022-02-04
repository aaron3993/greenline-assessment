const express = require("express");
const router = express.Router();
const products = require("../controllers/products.js");

router.get("/", products.getProducts);

router.post("/", products.createProduct);

module.exports = router;
