const fetchProducts = require("../models/product_model");

const getProducts = (req, res) => {
  
const queries = req.query;

  fetchProducts(queries)
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getProducts;
