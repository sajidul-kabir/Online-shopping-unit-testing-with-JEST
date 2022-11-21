const Admin = require("../classes/Admin.js");
const Products = require("../classes/Products.js");

const admin = new Admin(1, "sajid");

describe("Admin class constructor and methods check", () => {
  test("We can check if the Admin called the Products constructor", () => {
    expect(admin.products.allProducts).toEqual([]);
  });
  test("Checking if view products is a valid function", () => {
    expect(typeof admin.viewProducts).toBe("function");
  });
});

describe("Admin class Products Check", () => {
  test("addProducts successfully", () => {
    expect(admin.addProducts("chair")).toBe("ERROR");
    expect(admin.addProducts(1, "chair", "Furniture", "RFL")).toBe(undefined);
  });

  test("check if the id is in allProducts for deleetion", () => {
    expect(admin.deletProducts()).toBe("ERROR");
    expect(admin.addProducts(2, "table", "Furniture", "OTOBI")).toBe(undefined);

    expect(admin.deletProducts(3)).toBe("PRODUCT NOT FOUND");
  });

  test("Successfully delete and item", () => {
    expect(admin.deletProducts(1)).toStrictEqual([
      {
        group: "Furniture",
        id: 2,
        name: "table",
        subGroup: "OTOBI",
      },
    ]);
  });
});
describe("Admin class Shipment and Delivey", () => {
  test("check if the shipment method exists and returns valid", () => {
    expect(typeof admin.makeShipment).toBe("function");
    expect(admin.makeShipment()).toBe("Shipment Delivered");
  });
  test("check if the confirm delivery is valid", () => {
    expect(admin.confirmDelivery()).toBe("ERROR");
    expect(admin.confirmDelivery(1)).toBe(`confirmed delivery of product id 1`);
  });
});
