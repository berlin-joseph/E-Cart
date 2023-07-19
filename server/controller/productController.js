//api/v1/products - get method
exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
  });
};

exports.createProducts = (req, res, next) => {};
