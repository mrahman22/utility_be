const fetchProducts = require("../models/product_model");

const getProducts = (req, res, next) => {
  const queries = req.query;

  fetchProducts(queries)
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getProducts;
