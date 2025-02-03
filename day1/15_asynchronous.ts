// asynchroneous typescript

// what is asynchronous typescript?
// // --> asynchronous typescript is a way to write asynchronous code in typescript 

// promise
// what is promise?
// --> promise is a way to handle asynchronous code in javascript

// simulate 
// what is simulate?
// --> simulate is a way to create a fake data or fake function in javascript


const createPromise = () : Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data : string = "Hello World";
        if(data){
            resolve(data);
        } else {
            reject("No Data Found");
        }
    });
};

// calling create promise function 
const showData = async () => {
    const data: string = await createPromise();
    console.log(data); // Hello World
}

showData();