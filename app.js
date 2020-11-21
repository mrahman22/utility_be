const express = require("express");
const mongoose = require("mongoose");
const db_connection = require('./db_connection');
const apiRouter = require("./routers/apiRouter");

// express app
const app = express();
// Recognizes incoming request object as a JSON object
app.use(express.json());

// Connect to mondoDB
// const dbURI =
//   "mongodb+srv://mrahman22:Determination@23@products.gagnl.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose
  .connect(db_connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });


app.use("/api", apiRouter);

module.exports = app;
