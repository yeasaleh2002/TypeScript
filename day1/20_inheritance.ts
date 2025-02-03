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

