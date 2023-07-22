const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/database");

// dotenv config
dotenv.config({ path: path.join(__dirname, ".", "config", "config.env") });

// database config
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on the port ${process.env.PORT} and running on ${process.env.NODE_ENV} environment`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled rejection`);
  server.close(() => {
    process.exit(1);
  });
});
