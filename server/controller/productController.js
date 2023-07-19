const productModel = require("../models/productModel");

//Get Products - api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find();
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

// Create Products - api/v1/products
exports.createProducts = async (req, res, next) => {
  const product = await productModel.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//Get Single Product - api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "product not found",
    });
  }
  res.status(201).json({
    success: true,
    product,
  });
};
