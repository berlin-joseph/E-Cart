const express = require("express");
const {
  getProducts,
  createProducts,
  getSingleProduct,
} = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getProducts).post(createProducts);
router.route("/products/:id").get(getSingleProduct);

module.exports = router;
