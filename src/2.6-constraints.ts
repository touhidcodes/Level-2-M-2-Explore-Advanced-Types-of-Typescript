{
  //
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 24,
    name: "touhid",
    email: "X@gmail.com",
    devType: "Next Level Developer",
  });

  const student2 = addCourseToStudent({
    id: 33,
    name: "urmi",
    email: "Y@gmail.com",
    hasWatch: true,
  });

  const student3 = addCourseToStudent({
    id: 222,
    name: "unknown",
    email: "z@gmail.com",
  });
  //
}
