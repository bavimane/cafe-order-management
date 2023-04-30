const mongoose = require("mongoose");

const configureDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/cafe-order")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch(() => {
      console.log("Failed to connect");
    });
};

module.exports = configureDB;
