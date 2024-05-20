import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplite, deleteTodo, editTodo }) => {
  return (
    <div className="todo h-40">
      <div className="flex-start p-h-12">
        <p className="title">{task.task}</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
      </div>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
      <div
        className={task.completed ? "soft-green" : "soft-red"}
        onClick={() => toggleComplite(task.id)}
      >
        <p>{task.completed ? "Completed" : "Not completed"}</p>
      </div>
      <div
        className={
          task.priority === "Low"
            ? "soft-green"
            : task.priority === "Medium"
            ? "soft-orange"
            : "soft-red"
        }
      >
        <p>{task.priority}</p>
      </div>
    </div>
  );
};

export default Todo;
