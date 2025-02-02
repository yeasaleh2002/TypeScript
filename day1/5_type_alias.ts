// what is type alias?
// type alias --> we can create a new name for a type using type alias

// type alias
type Student = {
    name: string;
    age: number;
    address: string;
    role: string;
    balance: number;
    gender?: string;
}

const student1: Student = {   
    name: "John",
    age: 25,
    address: "Bangladesh",
    role: "Admin",
    balance: 500,
};

const student2: Student = {   
    name: "Steve",
    age: 30,
    address: "USA",
    role: "User",
    balance: 1000,
    gender: "male",
};


type userName = string;
type userAge = number;
type userAddress = string;
type isMarried = boolean;


// type alias in function
type AddFunction = (a: number, b: number) => number;

const addValues: AddFunction = (a, b) => a + b;
console.log(addValues(10, 20)); // 30

// type alias in array
type NumberArray = number[];
const numbers1: NumberArray = [10, 20, 30, 40, 50];
console.log(numbers1); // [10, 20, 30, 40, 50]