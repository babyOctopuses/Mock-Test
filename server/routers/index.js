const express = require("express");
const router = express.Router();

const auth = require("./auth");
const product = require("./product");
const testingapi = require("./testingapi");

router.use("https://test-binar.herokuapp.com/v2", testingapi);
router.use("https://test-binar.herokuapp.com/v1", product);

module.exports = router;
