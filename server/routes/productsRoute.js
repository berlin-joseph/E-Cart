const express = require("express");
const {
  getProducts,
  createProducts,
  getSingleProduct,
  updateProducts,
  deleteProducts,
} = require("../controller/productController");
const router = express.Router();

router.route("/products").get(getProducts).post(createProducts);
router
  .route("/products/:id")
  .get(getSingleProduct)
  .put(updateProducts)
  .delete(deleteProducts);

module.exports = router;
