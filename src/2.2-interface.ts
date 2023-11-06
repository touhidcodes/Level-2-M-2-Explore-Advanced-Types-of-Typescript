{
  //  Interface will be used for object type only

  //  Object Interface
  interface UserInterface {
    id: number;
    name: string;
    address: string;
  }

  const user1: UserInterface = {
    id: 12,
    name: "touhid",
    address: "jsr",
  };

  // Extends of interface
  interface UserInterfaceExtend extends UserInterface {
    roll: number;
  }

  const user2: UserInterfaceExtend = {
    id: 12,
    name: "touhid",
    address: "jsr",
    roll: 24,
  };

  //   Array Interface [by indexing signature]
  interface Number {
    [index: number]: number; // [index is a number] : value type
  }

  const rollNum: Number = [2, 3, 4, 5];

  //  Function Interface
  interface Add {
    (num1: number, num2: number): number;
  }

  const addNum: Add = (num1, num2) => num1 + num2;
  //
}
