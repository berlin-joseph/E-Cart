const express = require("express");
const app = express();
const products = require("./routes/productsRoute");
const errorMiddleware = require("./middleware/error");

// JSON Config
app.use(express.json());

//Product Routes
app.use("/api/v1/", products);

//Error Middleware
app.use(errorMiddleware);

// Exporting
module.exports = app;
