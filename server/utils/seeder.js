const connectDatabase = require("../config/database");
const products = require("../data/products.json");
const productsModel = require("../models/productModel");
const dotenv = require("dotenv");
const path = require("path");

//dotenv config
dotenv.config({ path: path.join(__dirname, "..", "config", "config.env") });

//db config
connectDatabase();

const seedProducts = async () => {
  try {
    await productsModel.deleteMany();
    console.log("All Products Deleted");
    await productsModel.insertMany(products);
    console.log("All Products Inserted");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};

seedProducts();
