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
  const name = null;
  const name1 = undefined;
  const userName = name ?? "John";
  const userName1 = name1 ?? "Steve";
  console.log(userName); // John
  console.log(userName1); // Steve

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

    const student: Student = {
        name: "John",
        age: 25,
    };

    console.log(student.address?.city); // undefined
}
