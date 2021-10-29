import { useState, useEffect } from "react";
import TodoList from "./TodoList";
const TodoItem = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const tempTodos = JSON.stringify(todos);
    localStorage.setItem("todos", tempTodos);
  }, [todos]);

  return (
    <div>
      <TodoList
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoItem;
