"use strict";
// what is type alias?
// type alias --> we can create a new name for a type using type alias
const student1 = {
    name: "John",
    age: 25,
    address: "Bangladesh",
    role: "Admin",
    balance: 500,
};
const student2 = {
    name: "Steve",
    age: 30,
    address: "USA",
    role: "User",
    balance: 1000,
    gender: "male",
};
const addValues = (a, b) => a + b;
console.log(addValues(10, 20)); // 30
const numbers1 = [10, 20, 30, 40, 50];
console.log(numbers1); // [10, 20, 30, 40, 50]
