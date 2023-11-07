{
  //  Mapped Types
  // Mapped types are a way to create new types based on another type. Effectively a transformational type.

  type Area = {
    height: number;
    width: number;
  };

  type Height = Area["height"]; // lookup type

  type AreaString = {
    [key in keyof Area]: string; // map types change type by index signature
  };

  // Generic Mapping
  type AreaStringGeneric<T> = {
    [key in keyof T]: T[key]; // lookup type
  };
  //
}
