// conditional type
// what is conditional type?
// --> conditional type is a feature that allows us to create a type that depends on another type

// syntax
// type conditionalType = T extends U ? X : Y;
// T - type
// U - type
// X - type
// Y - type

// Example 1
type CheckType<T> = T extends string ? "String" : "Not String";
const checkType1: CheckType<string> = "String";
const checkType2: CheckType<number> = "Not String";
console.log(checkType1); // String
console.log(checkType2); // Not String

// Example 2
type CheckType1<T> = T extends number ? "Number" : "Not Number";
const checkType3: CheckType1<string> = "Not Number";
const checkType4: CheckType1<number> = "Number";
console.log(checkType3); // Not Number
console.log(checkType4); // Number

