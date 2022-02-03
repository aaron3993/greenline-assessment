const express = require("express");
const router = express.Router();
const companies = require("../controllers/companies.js");

router.get("/", companies.getCompanies);
router.post("/", companies.createCompany);

module.exports = router;
