const Products = require("./Products.js");

module.exports = class Admin {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.products = new Products();
  }
  viewProducts() {
    return this.products.allProducts;
  }
  addProducts(id, name, group, subGroup) {
    if (!id || !name || !group || !subGroup) {
      return "ERROR";
    }
    if (typeof name === "string") {
      this.products.allProducts.push({
        id,
        name,
        group,
        subGroup,
      });
    } else {
      return "ERROR";
    }
  }
  deletProducts(id) {
    if (!id) {
      return "ERROR";
    }
    //console.log(this.products, "PRODUCTT");
    let prodcut_is_present = false;
    this.products.allProducts.filter(checkId);
    function checkId(product) {
      if (id === product.id) {
        prodcut_is_present = true;
      }
    }
    if (!prodcut_is_present) return "PRODUCT NOT FOUND";
    for (let index = 0; index < this.products.allProducts.length; index++) {
      if (id === this.products.allProducts[index].id) {
        this.products.allProducts.splice(index, 1);
        break;
      }
    }
    return this.products.allProducts;
  }
  makeShipment() {
    return "Shipment Delivered";
  }
  confirmDelivery(id) {
    if (!id) return "ERROR";
    return `confirmed delivery of product id ${id}`;
  }
};
