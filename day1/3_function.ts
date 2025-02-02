// types of function 
// Normal Function
// Arrow Function

// Normal Function
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20);
console.log(result); 


// Arrow Function
const addArrow = (a: number, b: number): number => {
    return a + b;
}
let resultArrow = addArrow(10, 20);
console.log(resultArrow);