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


// object type function --> but it should called as a method
const objectUser = {
    name: "John",
    balance: 500,
    addBalance: function(amount: number): number {
        return this.balance + amount;
    },
    addBalanceNew(amount: number): string {
        return this.balance + amount + " USD";
    }
}


let arr : number[] = [1, 2, 3, 4, 5];
const newArr = arr.map((value) => {
    return value * 2;
});