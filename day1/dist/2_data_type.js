"use strict";
/*
There are 2 types of data types in TypeScript:
1. Primitive Data Types
- number
- string
- boolean
- undefined
- null
- symbol
2. Non-Primitive Data Types
- object
- array
- tuple
*/
// string
let firstName = "John";
// number
let age = 25;
// boolean
let isStudent = true;
// undefined
let x = undefined;
// null
let y = null;
// symbol
let sym1 = Symbol('key1');
// object
let person = {
    name: "John",
    age: 25
};
// array
let fruits = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4, 5];
let students = [{ name: "John", age: 25 }, { name: "Steve", age: 30 }];
// tuple
// tuple --> array --> order --> type of values --> fixed length --> fixed type --> fixed order
let employee = [1, 'Steve'];
