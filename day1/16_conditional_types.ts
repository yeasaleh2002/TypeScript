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
