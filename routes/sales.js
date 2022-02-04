const express = require("express");
const router = express.Router();
const sales = require("../controllers/sales.js");

router.get("/", sales.getSales);

router.get("/total/:companyId", sales.getTotalSalesByCompany);

router.post("/", sales.createSale);

module.exports = router;
