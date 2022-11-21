module.exports = class Payment {
  constructor(customer_id, name, card_type, card_no, amount) {
    this.customer_id = customer_id;
    this.name = name;
    this.card_type = card_type;
    this.card_no = card_no;
    this.amount = amount;
  }
  checkBalance() {
    return "my balance";
  }
  makePayment(amount) {
    if (this.amount === amount) return true;
    else return false;
  }
};
