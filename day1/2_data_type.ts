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
let firstName: string = "John";

// number
let age: number = 25;

// boolean
let isStudent: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

// symbol
let sym1 = Symbol('key1');


// array
let fruits: string[] = ['apple', 'banana', 'mango'];
let numbers: number[] = [1, 2, 3, 4, 5];
let students: object[] = [{ name: "John", age: 25 }, { name: "Steve", age: 30 }];


// tuple
// tuple --> array --> order --> type of values --> fixed length --> fixed type --> fixed order
let employee: [number, string] = [1, 'Steve'];

// object
let person: object = {
    name: "John",
    age: 25
};

// reference type --> object
let user: {
    name: string,
    role? : string, // optonal property --> defined by ? mark and it can be undefined or null or string type value. It is not a required property. 
    age: number
} = {
    name: "John",
    age: 25
}