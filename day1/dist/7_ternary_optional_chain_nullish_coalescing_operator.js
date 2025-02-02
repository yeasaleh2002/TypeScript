"use strict";
var _a;
{
    // ternary operator
    // optional chaining
    // nullish coalescing operator
    // ternary operator
    const age = 18;
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log(isAdult); // Adult
    // nullish coalescing operator
    // --> nullish coalescing operator is a feature that allows us to assign a default value when the value is null or undefined
    const name = null;
    const name1 = undefined;
    const userName = name !== null && name !== void 0 ? name : "John";
    const userName1 = name1 !== null && name1 !== void 0 ? name1 : "Steve";
    console.log(userName); // John
    console.log(userName1); // Steve
    const student = {
        name: "John",
        age: 25,
    };
    console.log((_a = student.address) === null || _a === void 0 ? void 0 : _a.city); // undefined
}
