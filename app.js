const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require('./routers/apiRouter');


// express app
const app = express();
// Recognizes incoming request object as a JSON object
app.use(express.json());


// Listening for incoming requests
app.listen(3000, () => {
    console.log("Listening on port 3000......")
})


app.use("/api", apiRouter)



module.exports = app