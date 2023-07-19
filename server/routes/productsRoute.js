const express = require("express");
const {
  getProducts,
  createProducts,
  getSingleProduct,
  updateProducts,
} = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getProducts).post(createProducts);
router.route("/products/:id").get(getSingleProduct).put(updateProducts);

module.exports = router;
