const { default: mongoose } = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`Mongodb is connected `);
    })
    .catch((err) => {
      console.log("err");
    });
};

module.exports = connectDatabase;
