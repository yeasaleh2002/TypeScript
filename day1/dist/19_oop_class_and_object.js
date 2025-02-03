"use strict";
// OOP
// what is object oriented programming?
// Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
// four principles of OOP
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction
// Encapsulation
// what is encapsulation?
// --> encapsulation is a way to restrict access to some of the object's components
// Inheritance
// what is inheritance?
// --> inheritance is a way to create a new class using the properties and methods of an existing class
// Polymorphism
// what is polymorphism?
// --> polymorphism is a way to perform a single action in different ways
// Abstraction
// what is abstraction?
// --> abstraction is a way to hide the implementation details and show only the functionality
// class and object
// what is class?
// --> class is a blueprint for creating objects
// what is object?
// --> object is an instance of a class
// class
class Animal {
    // parameter properties
    // what is parameter properties? => parameter properties are the properties that are declared in the constructor
    /*
    constructor(public name: string, public species: string, public age: number) {
    }
    */
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }
    // methods
    // what is methods? => methods are the functions that are declared in a class
    display() {
        console.log(`Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`);
    }
}
const dog = new Animal("Dog", "Mammal", 5);
