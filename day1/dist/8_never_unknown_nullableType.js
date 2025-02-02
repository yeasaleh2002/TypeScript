"use strict";
{
    // nullable type
    // --> nullable type is a feature that allows us to assign a null value to a variable
    const searchName = (name) => {
        if (name === null) {
            return "Name not found";
        }
        else {
            return `Name: ${name}`;
        }
    };
    console.log(searchName("John")); // Name: John
    console.log(searchName(null)); // Name not found
    // unknown type
    // --> unknown type is a feature that allows us to assign any type of value to a variable
    const getSpeedInMeterPerSecond = (speed) => {
        if (typeof speed === "number") {
            return speed;
        }
        else {
            return "Speed is unknown";
        }
    };
    console.log(getSpeedInMeterPerSecond(100)); // 100
    console.log(getSpeedInMeterPerSecond("100")); // Speed is unknown
    // never type
    // --> never type is a feature that allows us to return never type from a function
    const throwError = (message) => {
        throw new Error(message);
    };
    throwError("Error: Something went wrong");
    // throwError("Error: Something went wrong");
}
