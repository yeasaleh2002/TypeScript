"use strict";
// generics with function
const createArray = (param) => {
    return [param];
};
const createArrayWithGenerics = (param) => {
    return [param];
};
const array1 = createArray("John");
console.log(array1); // [ 'John' ]
const array2 = createArrayWithGenerics("Steve");
console.log(array2); // [ 'Steve' ]
// generics with multiple types
const createTuple = (param1, param2) => {
    return [param1, param2];
};
const tuple1 = createTuple("John", 25);
console.log(tuple1); // [ 'John', 25 ]
