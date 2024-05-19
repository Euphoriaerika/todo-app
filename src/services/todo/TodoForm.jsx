import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="What is the task?"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;