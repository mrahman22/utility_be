const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require('./routers/apiRouter');


// express app
const app = express();
app.use(cors());

//Connect to mondoDB using mongoose

const db_connection = "mongodb+srv://mrahman22:Determination@23@products.gagnl.mongodb.net/utility?retryWrites=true&w=majority";

mongoose
  .connect(db_connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

// Recognizes incoming request object as a JSON object
app.use(express.json());

app.use("/api", apiRouter)

app.use("/", (req, res) => {
  res.send("Route Does Not Exist")
})


app.use((err, req, res, next) => {
  res.status(err.status).send({ msg: err.msg });
});


module.exports = app