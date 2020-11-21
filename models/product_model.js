const Product = require("../db/schema");

const fetchProducts = () => {
  return Product.find()
    .then((products) => {
      if (!products) {
        return Promise.reject({ status: 404, msg: "no products found" });
      }
      return products;
    });
};

module.exports = fetchProducts;
