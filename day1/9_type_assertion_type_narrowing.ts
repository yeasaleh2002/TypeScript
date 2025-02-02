// type assertion
// --> type assertion is a feature that allows us to convert one type to another type

// type narrowing
// --> type narrowing is a feature that allows us to narrow down the type of a variable

// type assertion

let anything: any;

anything = "John";

(anything as string).toUpperCase();

const kgToGram = (weight: string | number): string | number | undefined => {
  if (typeof weight === "string") {
    const weightInKg = parseFloat(weight);
    return weightInKg * 1000;
  } else {
    return weight * 1000;
  }
};


type CustomError = {
    message: string;
}


try {
  console.log(kgToGram("10")); // 10000
  console.log(kgToGram(10)); // 10000
  console.log(kgToGram("abc")); // NaN
}
catch (error) {
  console.log((error as CustomError).message);
}