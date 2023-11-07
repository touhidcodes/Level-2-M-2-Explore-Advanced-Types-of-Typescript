{
  // Utility Types

  type Person = {
    name: string;
    id: number;
    email?: string;
  };

  // Pick
  type Name = Pick<Person, "name">;
  type NameId = Pick<Person, "name" | "id">;

  //  Omit
  type Contact = Omit<Person, "name" | "id">;

  //  Required
  type PersonRequired = Required<Person>;

  //  Partial (optional)
  type PersonPartial = Partial<Person>;

  //  Readonly (can not re-assign)
  type PersonReadonly = Readonly<Person>;

  //  Record (can add key value pairs)
  type PersonRecord = Record<string, string>;
  const emptyObj: Record<string, unknown> = {};
  //
}
