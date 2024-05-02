export const deleteTodo = async (id) => {
  const apiUrl = `http://localhost:3001/api/notes/${id}`;
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhNDhkMWNiLTMzNGItNDlmZS1iM2RlLTFiZjdmMWVkYjY5YSIsInVzZXJuYW1lIjoiTWlra2VsIiwiaWF0IjoxNzEzNzY3MTE4fQ.UQg-4gzOI6Es1gLByEZl4cNmBaAqi6_6CSXXsZHo5Ww";

  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const deletedData = response.json();
    return deletedData;
  } catch (error) {
    console.error("Error occured in post of todo", error);
  }
};
