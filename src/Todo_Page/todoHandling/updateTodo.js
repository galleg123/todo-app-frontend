export const updateTodo = async (id, status) => {
  const apiUrl = `http://localhost:3001/api/notes/${id}`;
  const apiKey = localStorage.getItem("token");

  const data = {
    status,
  };

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const { data } = await response.json();


    return data;
  } catch (error) {
    console.error("Error occured in post of todo", error);
  }
};
