const mongoose = require("mongoose");
require("dotenv").config();

const username = "tgschool02";
const pass = "2u9JonxXdHbTpdhO";

const url =
  process.env.MONGODB_URI ||
  `mongodb+srv://${username}:${pass}@cluster0.rwca26e.mongodb.net/?retryWrites=true&w=majority`;
// example uri: mongodb+srv://<user>:<password>@books.cuyyq.mongodb.net/<dbName>?retryWrites=true&w=majority

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connectToDB = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
};

module.exports = connectToDB;
