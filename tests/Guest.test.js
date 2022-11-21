const Guest = require("../classes/Guest.js");
const Products = require("../classes/Products.js");

const guest = new Guest();

describe("Guest class constructor and methods check", () => {
  test("We can check if the Guest called the Products constructor", () => {
    expect(guest.products.allProducts).toEqual([]);
  });
  test("Checking if view products is a valid function", () => {
    expect(typeof guest.viewProducts).toBe("function");
  });
  test("Checking if getRegistered is a valid function", () => {
    expect(typeof guest.getRegistered).toBe("function");
  });
});
describe("Guest methods' functionality check", () => {
  test("predefined products", () => {
    guest.products.allProducts.push({
      id: 1,
      name: "chair",
      group: "Furniture",
      subGroup: "RFL",
    });
    guest.products.allProducts.push({
      id: 2,
      name: "table",
      group: "Furniture",
      subGroup: "OTOBI",
    });
    expect(guest.viewProducts()).toContainEqual({
      id: 1,
      name: "chair",
      group: "Furniture",
      subGroup: "RFL",
    });
  });
  test("Get Registered functionality", () => {
    let newUser = guest.getRegistered(1, "sajid", "sylhet", "012xx");
    expect(newUser.cart.productsInCart).toStrictEqual([]);
  });
});
