{
  // Promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something"; // null

      if (data) {
        resolve(data);
      } else {
        reject("No data exist");
      }
    });
  };

  //  call promise function
  const loadData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
  };

  loadData();

  //  Fetch Data
  const getToDo = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await res.json();
    return data;
  };

  getToDo();
  //
}
