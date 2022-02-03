const express = require("express");
const router = express.Router();
const users = require("../controllers/users.js");

router.get("/", users.getUsers);

router.post("/", users.createUser);

module.exports = router;
