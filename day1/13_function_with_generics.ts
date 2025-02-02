// generics with function

const createArray = (param: string): string[] => {
    return [param];
}

const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
}

const array1 = createArray("John");
console.log(array1); // [ 'John' ]

const array2 = createArrayWithGenerics("Steve");
console.log(array2); // [ 'Steve' ]

// generics with multiple types

const createTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
}

const tuple1 = createTuple("John", 25);