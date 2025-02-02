// the {} means is a module
{
    // spread operator
    // rest operator
    // destructuring


    // spread operator
    const browser: string[] = ['chrome', 'firefox', 'safari'];
    const os: string[] = ['windows', 'mac', 'linux'];
    browser.push(...os);



    // spread operator with object
    const person: {
        name: string,
        age: number
    } = {
        name: "John",
        age: 25
    };

    const newPerson = {
        ...person,
        address: "Bangladesh"
    }
    console.log(newPerson);


    // rest operator
    const add = (...numbers: number[]): number => {
        return numbers.reduce((acc, val) => acc + val, 0);
    }

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
    }

    const { name, age, address, role, balance, company: { name: companyName, address: companyAddress } } = user;
    console.log(name, age, address, role, balance, companyName, companyAddress);


}