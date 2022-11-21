const Admin = require("../classes/Admin.js");
const Customer = require("../classes/Customer");
const Payment = require("../classes/Payment.js");

jest.mock("../classes/Payment.js"); // Payment is now a mock constructor
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Payment.mockClear();
});
const myMock = jest.fn(() => true);
let customer = new Customer(1, "sajid", "sylhet", "123");

test("We can check if the customer.makePayment called the Payment class constructor", () => {
  customer.makePayment("visa", "1234");
  expect(Payment).toHaveBeenCalledTimes(1);
});
