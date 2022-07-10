const express = require("express");
const testingController = require("../controllers/testingController");
const router = express.Router();

router.get("/products", testingController.test);

module.exports = router;
