const Product = require("../db/schema");

const fetchProducts = ({ sortby, price }) => {


  return Product.find({'_id': false})
    .sort([
      [sortby, "asc"],
      ["price", price],
    ])
    .then((products) => {
      if (!products) {
        return Promise.reject({ status: 404, msg: "no products found" });
      }
      return products;
    });
};

module.exports = fetchProducts;
