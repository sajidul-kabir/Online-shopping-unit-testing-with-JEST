const Customer = require("./Customer.js");
const Products = require("./Products.js");
module.exports = class Guest {
  constructor() {
    this.products = new Products();
  }
  viewProducts() {
    return this.products.allProducts;
  }
  getRegistered(id, name, address, phone) {
    let newUser = new Customer(id, name, address, phone);
    return newUser;
  }
};
