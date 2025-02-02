{
  // nullable type
  // --> nullable type is a feature that allows us to assign a null value to a variable

  const searchName = (name: string | null) => {
    if (name === null) {
      return "Name not found";
    } else {
      return `Name: ${name}`;
    }
  };

  console.log(searchName("John")); // Name: John
}
