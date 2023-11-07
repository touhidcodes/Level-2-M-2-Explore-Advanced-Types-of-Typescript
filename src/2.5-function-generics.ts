{
  //  Function Generics

  // Normal  Array Function with TS
  const array = (param: string): string[] => {
    return [param];
  };

  //  Function Generics
  const arrayGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = arrayGeneric<string>("Bangladesh");

  //  Generic Tuple Function
  const genericTuple = <T, X>(params1: T, params2: X): [T, X] => {
    return [params1, params2];
  };

  const res2 = genericTuple<string, number>("Bangladesh", 3);

  //  Example: 

  const addCourseToStudent = <T>(student: T)=>{
    const course = "Next Level Web Development"
    return {
      ...student,
      course
    }
  }

  const student1 = addCourseToStudent({
    name: "touhid",
    email: "X@gmail.com",
    devType: "Next Level Developer"
  })

  const student2 = addCourseToStudent({
    name: "urmi",
    email: "Y@gmail.com",
   hasWatch: true
  })
  //
}
