"use strict";
// the {} means is a module
{
    // spread operator
    // rest operator
    // destructuring
    // spread operator
    const browser = ['chrome', 'firefox', 'safari'];
    const os = ['windows', 'mac', 'linux'];
    browser.push(...os);
    // spread operator with object
    const person = {
        name: "John",
        age: 25
    };
    const newPerson = Object.assign(Object.assign({}, person), { address: "Bangladesh" });
    console.log(newPerson);
    // rest operator
    const add = (...numbers) => {
        return numbers.reduce((acc, val) => acc + val, 0);
    };
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // destructuring
    const user = {
        name: "John",
        age: 25,
        address: "Bangladesh",
        role: "Admin",
        balance: 500,
        company: {
            name: "ABC",
            address: "USA"
        }
    };
    const { name, age, address, role, balance, company: { name: companyName, address: companyAddress } } = user;
    console.log(name, age, address, role, balance, companyName, companyAddress);
    // array destructuring
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    console.log(first, second, rest);
}
