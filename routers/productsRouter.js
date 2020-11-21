const productsRouter = require("express").Router();
const getProducts = require("../controllers/product_controller");


productsRouter.get("/", getProducts);


module.exports = productsRouter