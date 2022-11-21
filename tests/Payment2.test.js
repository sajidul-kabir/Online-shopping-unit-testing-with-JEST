const Customer = require("../classes/Customer");
const Payment = require("../classes/Payment.js");

let customer = new Customer(1, "sajid", "sylhet", "123");
let payment = new Payment();

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});
test("We can spyOn the methods of Payment Class", () => {
  const spy = jest.spyOn(payment, "makePayment");
  payment.makePayment();
  expect(spy).toHaveBeenCalledTimes(1);
});

test("passes if customer is able to complete payment", () => {
  // For this test we'll mock makePayment to return `false`
  const spy = jest.spyOn(payment, "makePayment").mockImplementation(() => {
    return true;
  });
  let result = payment.makePayment(2);
  expect(spy).toHaveBeenCalled();
  expect(result).toBe(true);

  expect(customer.makePayment("visa", "123", result)).toBe("payment completed");
  expect(customer.makePayment("DBBL", "432", result)).not.toBe("payment Error");
  //console.log(customer.makePayment());
  //expect(customer.makePayment("s", "s", result)).toBe("payment completed");
});

test("fails if customer is not able to complete payment", () => {
  // For this test we'll mock makePayment to return `false`
  const spy = jest.spyOn(payment, "makePayment").mockImplementation(() => {
    return false;
  });
  let result = payment.makePayment(2);
  expect(spy).toHaveBeenCalled();
  expect(result).toBe(false);

  expect(customer.makePayment("visa", "123", result)).toBe("payment Error");
  expect(customer.makePayment("DBBL", "432", result)).not.toBe(
    "payment completed"
  );
  //console.log(customer.makePayment());
  //expect(customer.makePayment("s", "s", result)).toBe("payment completed");
});
