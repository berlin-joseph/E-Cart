const express = require("express");
const app = express();
const products = require("./routes/productsRoute");

//Router
// JSON Config
app.use(express.json());

app.use("/api/v1/", products);
module.exports = app;
