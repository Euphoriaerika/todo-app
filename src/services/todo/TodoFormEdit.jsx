import { useState, useEffect } from "react";
import { arrowright } from "../../assets/icons";

const TodoFormEdit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  const handleBlur = (e) => {
    if (e.relatedTarget?.type !== "submit") {
      editTodo(task.task, task.id);
      setValue("");
    }
  };

  return (
    <form className="full-size flex border-1" onSubmit={handleSubmit}>
      <input
        className="ws-100 p-h-12"
        value={value}
        type="text"
        placeholder="Update Task:"
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        autoFocus
      />
      <button className="box-40" type="submit">
        <img className="full-size" src={arrowright} />
      </button>
    </form>
  );
};

export default TodoFormEdit;
