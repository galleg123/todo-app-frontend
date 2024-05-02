// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { getTodos } from "./todoHandling/getTodos";
import "./TodoPage.css";
import { postTodo } from "./todoHandling/postTodo";
import { deleteTodo } from "./todoHandling/deleteTodo";

function TodoPage() {
  const [burgerState, setBurgerState] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosData = await getTodos();
        console.log("Todos data is: ", todosData);
        setTodos(todosData);
      } catch (error) {
        console.error("There was an error with the fetching of todos: ", error);
      }
    };

    fetchData();
  }, []);

  const burgerToggle = () => {
    setBurgerState(!burgerState);
  };

  const handleNewTodoChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();
    const newTodo = await postTodo(newTodoText);

    setTodos([...todos, newTodo]);

    setNewTodoText("");
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();

    const deletedTodo = await deleteTodo(id);

    if (deletedTodo) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  };

  return (
    <>
      <div className="container">
        <header className="todoHeader">
          <div
            className={`burgerMenu ${burgerState ? "burgerChange" : ""}`}
            onClick={burgerToggle}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <form onSubmit={handleNewTodoSubmit}>
            <input
              type="text"
              value={newTodoText}
              onChange={handleNewTodoChange}
              placeholder="New Todo"
            ></input>
            <button type="submit"></button>
          </form>
          <button className="NewTodo">
            <h1>+</h1>
          </button>
        </header>
        <div className="todos">
          {todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h1 className="todotitle">{todo.title}</h1>
                <button onClick={(event) => handleDelete(event, todo.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TodoPage;
