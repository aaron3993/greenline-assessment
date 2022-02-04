const express = require("express");
const router = express.Router();
const sales = require("../controllers/sales.js");

router.get("/", sales.getSales);

router.post("/", sales.createSale);

module.exports = router;
