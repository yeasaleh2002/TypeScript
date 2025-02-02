"use strict";
// types of function 
// Normal Function
// Arrow Function
// Normal Function
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};
let resultArrow = addArrow(10, 20);
console.log(resultArrow);
// object type function --> but it should called as a method
const objectUser = {
    name: "John",
    balance: 500,
    addBalance: function (amount) {
        return this.balance + amount;
    },
    addBalanceNew(amount) {
        return this.balance + amount + " USD";
    }
};
let arr = [1, 2, 3, 4, 5];
const newArr = arr.map((value) => {
    return value * 2;
});
