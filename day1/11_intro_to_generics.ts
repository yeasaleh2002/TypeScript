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
type genericsArray<param> = Array<param>;

const numbers3: genericsArray<number> = [10, 20, 30, 40, 50];
