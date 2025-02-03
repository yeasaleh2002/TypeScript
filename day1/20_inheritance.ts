// inheritance
// what is inheritance?
// --> inheritance is a way to create a new class using the properties and methods of an existing class

// inheritance
class Parent {
    public name: string;
    public age: number;
    public address: string;
    
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}

class Student2 extends Parent {
    public role: string;
    public balance: number;
    
    constructor(name: string, age: number, address: string, role: string, balance: number) {
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
    public subject: string;
    public salary: number;
    
    constructor(name: string, age: number, address: string, subject: string, salary: number) {
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
