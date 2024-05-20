import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplite, deleteTodo, editTodo }) => {
  return (
    <div className="todo h-40">
      <div className="flex-start p-h-12">
        <p className="title">{task.task}</p>
      </div>
      <div className="pointer" onClick={() => editTodo(task.id)}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <div className="pointer" onClick={() => deleteTodo(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div
        className={`pointer ${task.completed ? "soft-green" : "soft-red"}`}
        onClick={() => toggleComplite(task.id)}
      >
        <p>{task.completed ? "Completed" : "Not completed"}</p>
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
        <p>{task.priority}</p>
      </div>
    </div>
  );
};

export default Todo;
