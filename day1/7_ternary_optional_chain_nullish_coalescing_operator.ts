{
  // ternary operator
  // optional chaining
  // nullish coalescing operator

  // ternary operator
  const age: number = 18;
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult); // Adult

  // nullish coalescing operator
    // --> nullish coalescing operator is a feature that allows us to assign a default value when the value is null or undefined
    const name: string = null;
    const userName = name ?? "John";

  // optional chaining
  // --> optional chaining is a feature that allows us to access nested properties without worrying if the property exists or not

  // optional chaining
  type Student = {
    name: string;
    age: number;
    address?: {
      city: string;
      country: string;
    };
  };
}
