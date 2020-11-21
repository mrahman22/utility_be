const fetchProducts = require("../models/product_model");

const getProducts = (req, res) => {
  fetchProducts()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getProducts;
