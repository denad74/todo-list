import React from "react";
import "./todolist.css";

const TodoList = ({ input, setInput, todos, setTodos }) => {
  const onTaskChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Enter a task");
    } else {
      setTodos([...todos, { id: new Date().getTime(), todo: input }]);
      setInput("");
    }
  };

  const removeTask = function removeTask(id) {
    const updateTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  return (
    <div className="todo">
      <form className="todo-form" onSubmit={onFormSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="enter task"
          value={input}
          onChange={onTaskChange}
        />
        <button className="todo-button" type="submit">
          add
        </button>
      </form>

      {todos.map((c) => (
        <div key={c.id}>
          <div className="todo-task" onClick={() => removeTask(c.id)}>
            {c.todo}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
