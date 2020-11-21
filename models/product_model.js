const Product = require("../db/schema");

const fetchProducts = ({ sortby, price }) => {

  
  return Product.find({})
    .sort([
      [sortby, "asc"],
      ["price", price],
    ])
    .then((products) => {
      console.log(products)
      if (!products) {
        return Promise.reject({ status: 404, msg: "no products found" });
      }
      return products;
    });
};

module.exports = fetchProducts;
