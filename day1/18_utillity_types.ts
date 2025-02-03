// Utillity types 
// Utillity types are the predefined generic types that are used to manipulate the types in TypeScript.

// Partial<Type>
// Partial<Type> is a generic type that takes a Type and makes all the properties of that type optional.

type Student3 = {
    name: string;
    age: number;
    address: string;
};

type PartialStudent = Partial<Student3>;

const student4: PartialStudent = {
    name: "John",
};

console.log(student4); // { name: 'John' }