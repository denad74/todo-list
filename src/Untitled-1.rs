import { useState } from "react";
import TodoList from "./components/TodoList";

const TodoItem = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <TodoList
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
    />
  );
};

export default TodoItem;

// import { useEffect } from "react";

// const TodoItem = (todos, setTodos, todo, setTodo) => {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const temp = localStorage.getItem("todos");
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       setTodos(loadedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     const tempTodos = JSON.stringify(todos);
//     localStorage.setItem("todos", tempTodos);
//   }, [todos]);

//   function removeTask(id) {
//     const updateTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updateTodos);
//   }

//   return (
//     <div>
//       {todos.map((c) => (
//         <div key={c.id}>
//           <div onClick={() => removeTask(c.id)}>{c.text}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoItem;
