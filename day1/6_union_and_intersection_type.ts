// union type
// union type --> we can combine multiple types using union type

// union type
type studentName = string | number;
const studentName1: studentName = "John";
const studentName2: studentName = 25;

type studentAddress = string | number;
const studentAddress1: studentAddress = "Bangladesh";
const studentAddress2: studentAddress = 25;


// intersection type
// intersection type --> we can combine multiple types using intersection type

// intersection type
type frontEndDeveloper = { 
    skills: string[];
    desgination1: string;
    experience: number;
}

type backEndDeveloper = {
    skills: string[];
    desgination2: string;
    experience: number;
}

type fullStackDeveloper = frontEndDeveloper & backEndDeveloper;

const fullStackDeveloper1: fullStackDeveloper = {
    skills: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "ExpressJS"],
    desgination1: "Frontend Developer",
    desgination2: "Backend Developer",
    experience: 5,
};