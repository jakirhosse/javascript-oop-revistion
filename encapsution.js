class BankAccount {
  // প্রাইভেট প্রপার্টি
  #balance;

  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber; // পাবলিক প্রপার্টি
    this.#balance = initialBalance; // প্রাইভেট প্রপার্টি
  }

  // প্রাইভেট মেথড
  #calculateInterest() {
    return this.#balance * 0.05; // ৫% ইন্টারেস্ট
  }

  // পাবলিক মেথড: ব্যালেন্স চেক করার জন্য
  getBalance() {
    console.log(`Your current balance is: ${this.#balance} taka`);
  }

  // পাবলিক মেথড: ডিপোজিট করার জন্য
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${amount} taka deposited successfully`);
      const interest = this.#calculateInterest();
      console.log(`Interest added: ${interest} taka`);
      this.#balance += interest;
    } else {
      console.log("Invalid deposit amount");
    }
  }

  // পাবলিক মেথড: টাকা উত্তোলন করার জন্য
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} taka withdrawn successfully`);
    } else {
      console.log("Insufficient balance or invalid amount");
    }
  }
}

// একটি নতুন ব্যাংক অ্যাকাউন্ট তৈরি
const myAccount = new BankAccount("123456789", 1000);

// ব্যালেন্স চেক করা
myAccount.getBalance(); // Output: Your current balance is: 1000 taka

// ৫০০ টাকা জমা করা
myAccount.deposit(500); // Output: 500 taka deposited successfully, Interest added: 75 taka

// নতুন ব্যালেন্স চেক করা
myAccount.getBalance(); // Output: Your current balance is: 1575 taka

// ৩০০ টাকা উত্তোলন করা
myAccount.withdraw(300); // Output: 300 taka withdrawn successfully

// সর্বশেষ ব্যালেন্স চেক করা
myAccount.getBalance(); // Output: Your current balance is: 1275 taka

// সরাসরি প্রাইভেট প্রপার্টি অ্যাক্সেস করার চেষ্টা (Error হবে)
// console.log(myAccount.#balance); // Syntax Error
