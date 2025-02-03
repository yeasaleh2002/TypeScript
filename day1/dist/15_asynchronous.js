"use strict";
// asynchroneous typescript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// what is asynchronous typescript?
// // --> asynchronous typescript is a way to write asynchronous code in typescript 
// promise
// what is promise?
// --> promise is a way to handle asynchronous code in javascript
// simulate 
// what is simulate?
// --> simulate is a way to create a fake data or fake function in javascript
const createPromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Hello World";
        if (data) {
            resolve(data);
        }
        else {
            reject("No Data Found");
        }
    });
};
// calling create promise function 
const showData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield createPromise();
    console.log(data); // Hello World
});
showData();
// api call
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = yield response.json();
    console.log(data);
    return data;
});
getTodo();
