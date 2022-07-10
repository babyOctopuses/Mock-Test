const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const testController = require("../controllers/testingController");
const testingController = require("../controllers/testingController");

router.get("/v2/products", testingController.test);

module.exports = router;
