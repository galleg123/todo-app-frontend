// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { getTodos } from "./todoHandling/getTodos";
import styles from "./TodoPage.module.css";
import { postTodo } from "./todoHandling/postTodo";
import { deleteTodo } from "./todoHandling/deleteTodo";
import { updateTodo } from "./todoHandling/updateTodo.js";
import NavBar from "../NavBar/NavBar.js";

function TodoPage() {
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

  const handleTaskDone = async (event, id, status) => {
    event.preventDefault();

    const updatedTodo = await updateTodo(id, !status);

    if (updatedTodo) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
          return todo;
        }
        return todo;
      });

      setTodos(updatedTodos);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* <div
                        className={`${styles.burgerMenu} ${burgerState ? styles.burgerChange : ""}`}
                        onClick={burgerToggle}
                    >
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div> */}
          <NavBar />
          <form onSubmit={handleNewTodoSubmit} className={styles.newTodoForm}>
            <input
              type="text"
              value={newTodoText}
              className={styles.newTodoText}
              onChange={handleNewTodoChange}
              placeholder="New Todo"
            ></input>
            <button type="submit" className={styles.NewTodo}>
              <div className={styles.button_plus}></div>
            </button>
          </form>
        </header>
        <div className={styles.todos}>
          {todos.map((todo) => {
            return (
              <div className={styles.todo} key={todo.id}>
                <h1
                  className={styles.todoTitle}
                  style={{
                    textDecorationLine: todo.status && "line-through",
                    textDecorationStyle: "solid",
                  }}
                  onClick={(event) =>
                    handleTaskDone(event, todo.id, todo.status)
                  }
                >
                  {todo.title}
                </h1>
                <button
                  className={styles.deleteButton}
                  onClick={(event) => handleDelete(event, todo.id)}
                >
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
