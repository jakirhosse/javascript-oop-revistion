// Shape ক্লাস তৈরি করা হলো
class Shape {
  area() {
    console.log("এই Shape এর এরিয়া নেই নির্দিষ্ট করা নেই।");
  }
}

// Rectangle ক্লাস তৈরি করা হলো, যা Shape ক্লাসকে extends করছে
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Circle ক্লাস তৈরি করা হলো, যা Shape ক্লাসকে extends করছে
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Shape টাইপের অবজেক্টগুলির তৈরি এবং তাদের area() মেথড কল করা হচ্ছে
const myRectangle = new Rectangle(5, 10);
const myCircle = new Circle(7);

console.log(myRectangle.area()); // আউটপুট: 50
console.log(myCircle.area()); // আউটপুট: 153.93804002589985

// Employee ক্লাস তৈরি করা হলো
class Employee {
  getSalary() {
    console.log("এই কর্মচারীর বেতন নির্দিষ্ট করা হয়নি।");
  }
}

// FullTimeEmployee ক্লাস তৈরি করা হলো, যা Employee ক্লাসকে extends করছে
class FullTimeEmployee extends Employee {
  constructor(salary) {
    super();
    this.salary = salary;
  }

  getSalary() {
    return `Full-time কর্মচারীর বেতন: ${this.salary} টাকা`;
  }
}

// PartTimeEmployee ক্লাস তৈরি করা হলো, যা Employee ক্লাসকে extends করছে
class PartTimeEmployee extends Employee {
  constructor(hourlyRate, hoursWorked) {
    super();
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  getSalary() {
    return `Part-time কর্মচারীর বেতন: ${
      this.hourlyRate * this.hoursWorked
    } টাকা`;
  }
}

// Employee টাইপের অবজেক্টগুলির তৈরি এবং তাদের getSalary() মেথড কল করা হচ্ছে
const fullTimeEmp = new FullTimeEmployee(50000);
const partTimeEmp = new PartTimeEmployee(200, 80);

console.log(fullTimeEmp.getSalary()); // আউটপুট: Full-time কর্মচারীর বেতন: 50000 টাকা
console.log(partTimeEmp.getSalary()); // আউটপুট: Part-time কর্মচারীর বেতন: 16000 টাকা
