import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo, changePriority }) => {
  return (
    <div className="todo h-40">
      <div className="flex-start p-h-12">
        <p className="title">{task.title}</p>
      </div>
      <div className="pointer" onClick={() => editTodo(task._id)}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <div className="pointer" onClick={() => deleteTodo(task._id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div
        className={`pointer ${task.status ? "soft-green" : "soft-red"}`}
        onClick={() => toggleComplete(task._id)}
      >
        <p>{task.status ? "Completed" : "Not completed"}</p>
      </div>
      <div
        className={`pointer ${
          task.priority === "Low"
            ? "soft-green"
            : task.priority === "Medium"
            ? "soft-orange"
            : "soft-red"
        }`}
      >
        <select
          value={task.priority}
          onChange={(e) => changePriority(e.target.value, task._id)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
  );
};

export default Todo;
