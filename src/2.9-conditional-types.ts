{
  //  Conditional Type
  type x = number;
  type y = undefined;

  type a = x extends null ? true : false; // conditional type
  type b = x extends null ? true : y extends undefined ? undefined : false;

  type Property = {
    bike: string;
    car: string;
    ship: string;
  };

  type checkVehicle<T> = T extends keyof Property ? true : false;
  //
}
