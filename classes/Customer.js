const Cart = require("./Cart.js");
const Payment = require("./Payment.js");
const Products = require("./Products.js");
module.exports = class Customer {
  constructor(id, name, address, phone) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;

    this.products = new Products();
    this.cart = new Cart();
  }

  viewProducts() {
    return this.products.allProducts;
  }
  addToCart(id, price) {
    if (!id) return "ERROR";
    let prodcut_is_present = false;
    this.products.allProducts.filter(checkId);
    function checkId(product) {
      if (id === product.id) {
        prodcut_is_present = true;
      }
    }
    if (!prodcut_is_present) return "PRODUCT NOT FOUND";
    this.cart.productsInCart.push({
      id,
      price,
    });
    return "successful";
  }

  deleteFromCart(id) {
    if (!id) return "ERROR";
    let prodcut_is_present = false;
    this.cart.productsInCart.filter(checkId);
    function checkId(product) {
      if (id === product.id) {
        prodcut_is_present = true;
      }
    }
    if (!prodcut_is_present) return "PRODUCT NOT FOUND IN CART";
    for (let index = 0; index < this.cart.productsInCart.length; index++) {
      if (id === this.cart.productsInCart[index].id) {
        this.cart.productsInCart.splice(index, 1);
        break;
      }
    }
    return "successful";
  }
  makePayment(card_type, card_no, able) {
    let payment = new Payment(
      this.id,
      this.name,
      card_type,
      card_no,
      this.cart.total()
    );
    if (able) {
      return "payment completed";
    } else {
      //console.log(payment);
      return "payment Error";
    }
  }
  buyProducts() {
    let purchased = this.cart.total();
    let number_of_items = this.cart.productsInCart.length;
    this.cart.productsInCart = [];
    return `purchased ${number_of_items} items of ${purchased}$`;
  }
};
