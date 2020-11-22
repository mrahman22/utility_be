const express = require("express");
const mongoose = require("mongoose");
const db_connection = require('./db_connection');
const apiRouter = require('./routers/apiRouter');


// express app
const app = express();

//Connect to mondoDB using mongoose
mongoose
  .connect(db_connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });


// Recognizes incoming request object as a JSON object
app.use(express.json());


// Listening for incoming requests
app.listen(3000, () => {
    console.log("Listening on port 3000......")
})


app.use("/api", apiRouter)



module.exports = app