const { default: mongoose } = require("mongoose");
const { productSchema } = require("../schema/productSchema");

const productModel = mongoose.model("product", productSchema);
