export const postTodo = async (title) => {
  const apiUrl = "http://localhost:3001/api/notes";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhNDhkMWNiLTMzNGItNDlmZS1iM2RlLTFiZjdmMWVkYjY5YSIsInVzZXJuYW1lIjoiTWlra2VsIiwiaWF0IjoxNzEzNzY3MTE4fQ.UQg-4gzOI6Es1gLByEZl4cNmBaAqi6_6CSXXsZHo5Ww";

  const data = {
    title,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const { data } = await response.json();

    const note = {
      title: data.title,
      status: data.status,
      id: data.id,
    };
    console.log(data);

    console.log(note);
    return note;
  } catch (error) {
    console.error("Error occured in post of todo", error);
  }
};
