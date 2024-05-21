import { useState } from "react";
import { arrowright } from "../../assets/icons";
import { updateTask } from "../../api";

const TodoFormEdit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(task._id, { title: value });
      editTodo(value, task._id);
      setValue("");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleBlur = (e) => {
    if (e.relatedTarget?.type !== "submit") {
      editTodo(task.title, task._id);
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
        <img className="full-size" src={arrowright} alt="Submit" />
      </button>
    </form>
  );
};

export default TodoFormEdit;
