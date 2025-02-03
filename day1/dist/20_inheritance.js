"use strict";
// inheritance
// what is inheritance?
// --> inheritance is a way to create a new class using the properties and methods of an existing class
// inheritance
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}
class Student2 extends Parent {
    constructor(name, age, address, role, balance) {
        super(name, age, address); // super keyword is used to call the constructor of the parent class
        this.role = role;
        this.balance = balance;
    }
    display() {
        super.display();
        console.log(`Role: ${this.role}, Balance: ${this.balance}`);
    }
}
const student5 = new Student2("John", 25, "Bangladesh", "Admin", 500);
student5.display();
// output   
// Name: John, Age: 25, Address: Bangladesh 
class Teacher extends Parent {
    constructor(name, age, address, subject, salary) {
        super(name, age, address);
        this.subject = subject;
        this.salary = salary;
    }
    display() {
        super.display();
        console.log(`Subject: ${this.subject}, Salary: ${this.salary}`);
    }
}
const teacher = new Teacher("Steve", 30, "USA", "Math", 1000);
teacher.display();
// output
// Name: Steve, Age: 30, Address: USA, Subject: Math, Salary: 1000
