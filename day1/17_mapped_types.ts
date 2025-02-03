// mapped type
// what is mapped type?
// --> mapped type is a feature that allows us to create a new type from an existing type

// syntax
/*
 type mappedType = {
  [P in keyof type]: type[P];
}
P - property
keyof - keyword
type - type 
*/

// Example 1

type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = {
  readonly [P in keyof Person]: Person[P];
};

const person1: ReadOnlyPerson = {
  name: "John",
  age: 25,
};

// person.name = "Steve"; // Cannot assign to 'name' because it is a read-only property.            
console.log(person1.name); // John
