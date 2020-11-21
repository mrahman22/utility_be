const productsRouter = require("express").Router();


productsRouter.use("/", (req, res) => {
    res.send("musty Am I working!!!!");
})


module.exports = productsRouter