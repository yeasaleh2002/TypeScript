"use strict";
// mapped type
// what is mapped type?
// --> mapped type is a feature that allows us to create a new type from an existing type
const person1 = {
    name: "John",
    age: 25,
};
// person.name = "Steve"; // Cannot assign to 'name' because it is a read-only property.            
console.log(person1.name); // John
