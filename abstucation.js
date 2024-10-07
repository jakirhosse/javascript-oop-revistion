class Computer {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`
    );
  }
}

class Hp extends Computer {
  constructor(name, model, warenty) {
    super(name, model);
    this.warenty = warenty;
    // console.log("this is hp computer");
  }

  aboutWarenty() {
    console.log(`${this.name} provider ${this.warenty} year of warenty`);
  }

  useComputer(value) {
    console.log(`${this.warenty * 12 * 30 - value * 30} day warenty remaing `);
  }
}

let hp = new Hp("HP", "dk34", 3);
hp.aboutComputer();
hp.aboutWarenty();
hp.useComputer(6.5);
// console.log(hp)

class BankAccount {
  constructor(accountNumber, balance) {
    this.#accountNumber = accountNumber; // প্রাইভেট প্রপার্টি
    this.#balance = balance; // প্রাইভেট প্রপার্টি
  }

  // পাবলিক মেথড যা ব্যালেন্স চেক করে
  getBalance() {
    console.log(`Your current balance is: ${this.#balance} taka`);
  }

  // প্রাইভেট মেথড যেটি শুধুমাত্র ইন্টার্নাল ব্যবহারের জন্য
  #calculateInterest() {
    return this.#balance * 0.05; // ৫% ইন্টারেস্ট
  }

  // পাবলিক মেথড যা ডিপোজিট করে এবং ইন্টারেস্ট যোগ করে
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
}

const myAccount = new BankAccount("123456789", 1000);
myAccount.getBalance(); // Output: Your current balance is: 1000 taka
myAccount.deposit(500); // Output: 500 taka deposited successfully, Interest added: 75 taka
myAccount.getBalance(); // Output: Your current balance is: 1575 taka

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.#engineStatus = "off"; // প্রাইভেট প্রপার্টি
  }

  // পাবলিক মেথড যা গাড়ি শুরু করে
  startCar() {
    if (this.#checkEngine()) {
      this.#engineStatus = "on";
      console.log(`${this.make} ${this.model} engine is now ON`);
    } else {
      console.log(`Unable to start the engine of ${this.make} ${this.model}`);
    }
  }

  // প্রাইভেট মেথড যেটি ইঞ্জিন চেক করে
  #checkEngine() {
    // ইঞ্জিনের কিছু কমপ্লেক্স লজিক এখানে হতে পারে
    return true; // সোজাসুজি true ফেলা হয়েছে উদাহরণের জন্য
  }

  // পাবলিক মেথড যা গাড়ি বন্ধ করে
  stopCar() {
    this.#engineStatus = "off";
    console.log(`${this.make} ${this.model} engine is now OFF`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.startCar(); // Output: Toyota Corolla engine is now ON
myCar.stopCar(); // Output: Toyota Corolla engine is now OFF
