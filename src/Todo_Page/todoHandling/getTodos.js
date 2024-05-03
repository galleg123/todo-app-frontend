export const getTodos = async () => {
  // API CALL TO TODOS DB
  // PASS IN THE USERID FROM COOKIES?

  const apiUrl = "http://localhost:3001/api/notes";
  const apiKey = localStorage.getItem("token");
  const res = [];
  try {
    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.ok) {
      throw new Error("Network respone was not ok");
    }

    const todos = await response.json();

    for (const todo of todos.data) {
      const note = {
        title: todo.title,
        status: todo.status,
        id: todo.id,
      };
      res.push(note);
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }

  console.log(res);
  return res;
};
