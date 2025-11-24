class BankAccount {
  static #totalNumberOfAccounts = 0; //Add static private property
  #balance = 0;
  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    this.#balance += amount; //balance is private
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`); //balance is private
    return this.#balance; //balance is private
  }

  withdraw(amount) {
    if (amount > this.#balance) { //balance is private
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount; //balance is private
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`); //balance is private
    }
    return this.#balance; //balance is private
  }

  getBalance() {
    return this.#balance; //#balance;
  }

  static getTotalNumberOfAccounts() { 
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = []; //should be in constructor
  }

  addAccount(account) {
    this.accounts.push(account); //should be this.accounts
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => { //should be this.accounts
      total += account.getBalance(); //added .getBalance() instead of .balance
    });
    return total;
  }

  findAccount(accountNumber) {
    return this.accounts.find((account) => account.accountNumber = accountNumber); //should be this.accounts
  }
}

// TEST YOUR CODE HERE

const myBank = new Bank("First National");
console.log(myBank); // Bank { name: "First National" }

const account1 = new BankAccount("001", "Alice");
const account2 = new BankAccount("002", "Bob");
console.log(account1); // BankAccount { accountNumber: "001", ownerName: "Alice" }
console.log(account2); // BankAccount { accountNumber: "002", ownerName: "Bob" }

myBank.addAccount(account1);
myBank.addAccount(account2);
console.log(myBank.accounts);
/* 
[
  BankAccount { accountNumber: "001", ownerName: "Alice" },
  BankAccount { accountNumber: "002", ownerName: "Bob" }
]
*/

account1.deposit(100); // Deposited $100. New Balance: 100
account1.withdraw(50); // Withdrew $50. New Balance: 50
account2.deposit(250); // Deposited $250. New Balance: 250
console.log(myBank.getTotalBalance()); // 300

console.log(myBank.findAccount("001").ownerName); // "Alice"

new BankAccount("003", "Charlie");
console.log("Total accounts:", BankAccount.getTotalNumberOfAccounts()); // Should be 3

// DO NOT REMOVE
module.exports = { BankAccount, Bank };
