{
  //  Type Assertion
  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Converted Value is : ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram("5000") as string;
  const result2 = kgToGram(3000) as number;

  console.log(result1, result2);

  type CustomError = {
    message: string;
  };

  try {
    // try condition
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
