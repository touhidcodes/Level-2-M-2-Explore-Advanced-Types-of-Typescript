{
  //  Generic Constraints key Of
  // Use extends keyof to constrain a type that is the property of another object.

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Property = keyof Vehicle;

  const person: Property = "bike";

  //  Make a function that takes a object and key and return value of key

  const valueOfKey = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };

  const user = {
    name: "Touhid",
    age: 24,
    isMarried: true,
  };

  const result = valueOfKey(user, "name");
  console.log(result);

  //
}
