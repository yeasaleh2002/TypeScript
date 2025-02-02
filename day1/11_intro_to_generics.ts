// generics type
// generics type is a feature that allows us to create reusable components

// const rollNumbers : number[] = [10, 20, 30, 40, 50];
// using generics
const rollNumbers: Array<number> = [10, 20, 30, 40, 50];

// const mentors: string[] = ["John", "Steve", "Bill", "Ravi"];
// using generics
const mentors: Array<string> = ["John", "Steve", "Bill", "Ravi"];

// const booleanValues: boolean[] = [true, false, true, false];
// using generics
const booleanValues: Array<boolean> = [true, false, true, false];

// generics reuseable
type genericsArray<T> = Array<T>;

const numbers3: genericsArray<number> = [10, 20, 30, 40, 50];

// for array of objects
const user2: genericsArray<{
  name: string;
  age: number;
  address: string;
  role: string;
  balance: number;
}> = [
  { name: "John", age: 25, address: "Bangladesh", role: "Admin", balance: 500 },
  { name: "Steve", age: 30, address: "USA", role: "User", balance: 400 },
  { name: "Bill", age: 35, address: "UK", role: "Admin", balance: 600 },
  { name: "Ravi", age: 40, address: "India", role: "User", balance: 300 },
];


// generic touple
type genericsTouple<T, U> = [T, U];

const studentInfo: genericsTouple<string, number> = ["John", 25];

