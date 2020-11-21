const Product = require("../db/schema");

const fetchProducts = ({sort_by}) => {
    if(sort_by === "desc") {
        sort_by = -1
    } else {
        sort_by = 1;
    }

  return Product.find({})
    .sort({price: sort_by})
    .then((products) => {
      console.log(products);
      if (!products) {
        return Promise.reject({ status: 404, msg: "no products found" });
      }
      return products;
    });
};

module.exports = fetchProducts;

