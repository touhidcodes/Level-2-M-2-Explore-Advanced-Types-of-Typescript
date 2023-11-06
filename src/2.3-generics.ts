{
  // Generic Types
  const strings: Array<string> = ["hi", "bye"];
  const numbers: Array<number> = [2, 3, 4, 5, 6];
  const booleans: Array<boolean> = [true, false, true];

  //  Reusable Generics
  type GenericArray<T> = Array<T>;

  const genericString: GenericArray<string> = ["hi", "bye"];
  const genericNumber: GenericArray<number> = [2, 3, 4, 5, 6];
  const genericBoolean: GenericArray<boolean> = [true, false, true];

  //  Generic Array of Object
  const user: GenericArray<{
    name: string;
    id: number;
  }> = [
    {
      name: "touhid",
      id: 24,
    },
    {
      name: "urmi",
      id: 33,
    },
  ];

  // Generic Tuple
  const person: [string, number, boolean] = ["touhid", 24, true]; // normal tuple

  type GenericTuple<x, y, z> = [x, y, z];
  type User = {
    name: string;
    email: string;
  };

  //  or

  interface Users {
    name: string;
    email: string;
  }

  const tuple1: GenericTuple<string, number, boolean> = ["touhid", 24, true];
  const tuple2: GenericTuple<number, boolean, User> = [
    234,
    true,
    {
      name: "touhid",
      email: "touhidcodes@gmail.com",
    },
  ];
  //
}
