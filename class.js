class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes ${this.sound}`);
  }
}

const dog = new Animal("Dog", "bark");
dog.makeSound(); // Output: Dog makes bark

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.

class Car {
  #engineStatus;

  constructor(brand) {
    this.brand = brand;
    this.#engineStatus = false;
  }

  startEngine() {
    this.#engineStatus = true;
    console.log(`${this.brand} engine started.`);
  }

  stopEngine() {
    this.#engineStatus = false;
    console.log(`${this.brand} engine stopped.`);
  }
}

const car = new Car("Toyota");
car.startEngine(); // Output: Toyota engine started.
car.stopEngine(); // Output: Toyota engine stopped.

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }
}

const person = new Person("Alice");
console.log(person.name); // Output: Alice
person.name = "Bob";
console.log(person.name); // Output: Bob
person.name = ""; // Output: Name cannot be empty.

class Person {
  constructor(name, age) {
    this.name = name; // ব্যক্তির নাম
    this.age = age; // ব্যক্তির বয়স
  }

  sayName() {
    console.log(`আমার নাম ${this.name}.`);
  }
}

// নতুন অবজেক্ট তৈরি
const person1 = new Person("Jakir", 25);
person1.sayName(); // Output: আমার নাম Jakir.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`আমার নাম ${this.name}.`);
  }
}

// Student ক্লাসটি Person থেকে ইনহেরিট করছে
class Student extends Person {
  sayAge() {
    console.log(`আমার বয়স ${this.age} বছর.`);
  }
}

const student1 = new Student("Rahim", 20);
student1.sayName(); // Output: আমার নাম Rahim.
student1.sayAge(); // Output: আমার বয়স 20 বছর.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // প্রাইভেটের মতো ব্যবহৃত হচ্ছে
  }

  // getter
  get balance() {
    return this._balance;
  }

  // setter
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative.");
    } else {
      this._balance = amount;
    }
  }

  deposit(amount) {
    this._balance += amount;
    console.log(`${amount} added. New balance is ${this._balance}.`);
  }

  // Static method to compare two accounts
  static compareBalance(account1, account2) {
    if (account1.balance > account2.balance) {
      return `${account1.owner} has more balance.`;
    } else if (account1.balance < account2.balance) {
      return `${account2.owner} has more balance.`;
    } else {
      return "Both have the same balance.";
    }
  }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Jane", 1000);

acc1.deposit(200); // Output: 200 added. New balance is 700.
console.log(BankAccount.compareBalance(acc1, acc2)); // Output: Jane has more balance.

acc1.balance = -100; // Output: Balance cannot be negative.
console.log(acc1.balance); // Output: 700 (negative value set হয়নি)
