const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const productController = require("../controllers/productController");

router.get("/products", productController.showData);
router.get("/products/:productid", productController.showDataById);

module.exports = router;
