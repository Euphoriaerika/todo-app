import { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Update Task:"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodoForm;