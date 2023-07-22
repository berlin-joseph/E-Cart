const ErrorHandler = require("../utils/errorHandler");

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV == "development") {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }
  if (process.env.NODE_ENV == "production") {
    let message = err.message;
    let error = new ErrorHandler(message);

    // validation Error
    if (err.name == "ValidationError") {
      message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorHandler(message);
    }

    // cast Error
    if (err.name == "castError") {
      message = `Resource Not Found: ${err.path} `;
      console.log(err);
      error = new ErrorHandler(message);
    }

    res.status(err.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = errorMiddleware;
