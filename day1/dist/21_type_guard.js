"use strict";
// type guard
// what is type guard?
// --> type guard is a way to check the type of a variable in typescript
// type guard with typeof
// --> typeof is a way to check the type of a variable in typescript
// type guard with instanceof
// --> instanceof is a way to check the type of a variable in typescript
// type guard with in
// --> in is a way to check the type of a variable in typescript
// type guard with is
// --> is is a way to check the type of a variable in typescript
//  example of type guard with typeof
const getSpeedInMeterPerSecond = (speed) => {
    if (typeof speed === "number") {
        return speed;
    }
    else {
        return "Speed is unknown";
    }
};
console.log(getSpeedInMeterPerSecond(100)); // 100
//  example of type guard with instanceof
class Animal1 {
    constructor(name) {
        this.name = name;
    }
}
class Dog1 extends Animal1 {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
class Cat1 extends Animal1 {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
