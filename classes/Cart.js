module.exports = class Cart {
  constructor() {
    this.productsInCart = [];
  }
  total() {
    let sum = 0;
    for (let index = 0; index < this.productsInCart.length; index++) {
      sum += this.productsInCart[index].price;
    }
    return sum;
  }
};
