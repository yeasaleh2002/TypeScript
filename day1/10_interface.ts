// interface
// interface is a way to define a type in typescript

// interface
interface Student2 {
    name: string;
    age: number;
    address: string;
    balance: number;
}

type withRole = Student2 & { role: string };

interface withRole2 extends Student2 {
    role: string;
}

const student3: withRole = {
    name: "John",
    age: 25,
    address: "Bangladesh",
    balance: 500,
    role: "Admin",
};

// interface in array
interface NumberArray2 {
    [index: number]: number;
}

const numbers2: NumberArray2 = [10, 20, 30, 40, 50];