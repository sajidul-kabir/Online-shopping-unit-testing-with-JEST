const Customer = require("../classes/Customer");
const Admin = require("../classes/Admin");

const customer = new Customer(1, "sajid", "sylhet", "123");
const admin = new Admin(1, "admin");

describe("Customer constructor and methods check", () => {
  test("We can check if the Customer called the Carts constructor", () => {
    expect(customer.cart.productsInCart).toEqual([]);
  });
  test("We can check if the Customer called the Products constructor", () => {
    expect(customer.products.allProducts).toEqual([]);
  });
  test("check if those following methods exist", () => {
    expect(typeof customer.addToCart).toBe("function");
    expect(typeof customer.deleteFromCart).toBe("function");
    expect(typeof customer.addToCart2).toBe("undefined");
  });
});

describe("Cart functionality check for a customer", () => {
  test("predefined products for purchase", () => {
    customer.products.allProducts.push({
      id: 1,
      name: "chair",
      group: "Furniture",
      subGroup: "RFL",
    });
    customer.products.allProducts.push({
      id: 2,
      name: "table",
      group: "Furniture",
      subGroup: "OTOBI",
    });
    customer.products.allProducts.push({
      id: 3,
      name: "sofa",
      group: "Furniture",
      subGroup: "RFL",
    });
    customer.products.allProducts.push({
      id: 4,
      name: "mobile",
      group: "Technology",
      subGroup: "Realme",
    });
    customer.products.allProducts.push({
      id: 5,
      name: "earphone",
      group: "Technology",
      subGroup: "Realme",
    });

    expect(customer.viewProducts()).toContainEqual({
      id: 4,
      name: "mobile",
      group: "Technology",
      subGroup: "Realme",
    });
  });
  test("add to cart check", () => {
    expect(customer.addToCart()).toBe("ERROR");
    expect(customer.addToCart(7, 100)).toBe("PRODUCT NOT FOUND");

    expect(customer.addToCart(3, 500)).toBe("successful");
    expect(customer.addToCart(5, 100)).toBe("successful");

    expect(customer.cart.total()).toBe(600);
  });
  test("delete from cart", () => {
    expect(customer.deleteFromCart()).toBe("ERROR");
    expect(customer.deleteFromCart(2)).toBe("PRODUCT NOT FOUND IN CART");
    expect(customer.deleteFromCart(3)).not.toBe("PRODUCT NOT FOUND IN CART");

    expect(customer.cart.total()).toBe(100);
  });
});
describe("Purchase functionality check for a customer", () => {
  test("successfully purchased", () => {
    expect(customer.addToCart(2, 400)).toBe("successful");
    expect(customer.cart.total()).toBe(500);

    expect(customer.buyProducts()).toEqual("purchased 2 items of 500$");
    expect(customer.cart.total()).toBe(0);
  });
});
