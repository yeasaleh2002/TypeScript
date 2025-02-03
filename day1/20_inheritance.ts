// inheritance
// what is inheritance?
// --> inheritance is a way to create a new class using the properties and methods of an existing class

class Student2 {
  public name: string;
  public age: number;
  public address: string;
  public role: string;
  public balance: number;

  constructor(
    name: string,
    age: number,
    address: string,
    role: string,
    balance: number
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.role = role;
    this.balance = balance;
  }

  display() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Role: ${this.role}, Balance: ${this.balance}`
    );
  }
}


