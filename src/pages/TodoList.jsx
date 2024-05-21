import { useState, useEffect } from "react";
import TodoForm from "../services/todo/TodoForm";
import Todo from "../services/todo/Todo";
import TodoFormEdit from "../services/todo/TodoFormEdit";
import { getTasks, addTask, updateTask, deleteTask } from "../api";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTodoList(response.data);
    };
    fetchTasks();
  }, []);

  const addTodo = async (todo) => {
    const newTask = {
      title: todo,
      status: false,
      priority: "Medium",
    };
    const response = await addTask(newTask);
    setTodoList([...todoList, response.data]);
  };

  const toggleComplete = async (id) => {
    const todo = todoList.find((t) => t._id === id);
    const updatedTask = { ...todo, status: !todo.status };
    const response = await updateTask(id, updatedTask);
    setTodoList(todoList.map((t) => (t._id === id ? response.data : t)));
  };

  const deleteTodo = async (id) => {
    await deleteTask(id);
    setTodoList(todoList.filter((todo) => todo._id !== id));
  };

  const editTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo._id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = async (task, id) => {
    const updatedTask = { ...task, isEditing: false };
    const response = await updateTask(id, updatedTask);
    setTodoList(
      todoList.map((todo) => (todo._id === id ? response.data : todo))
    );
  };

  const changePriority = async (priority, id) => {
    const todo = todoList.find((t) => t._id === id);
    const updatedTask = { ...todo, priority };
    const response = await updateTask(id, updatedTask);
    setTodoList(
      todoList.map((todo) => (todo._id === id ? response.data : todo))
    );
  };

  return (
    <div className="p-12">
      <h1 className="border-b-1-grey">Table Name</h1>
      <div className="border-1 m-v-12 ws-50">
        {todoList.map((todo) =>
          todo.isEditing ? (
            <TodoFormEdit key={todo._id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo._id}
              task={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              changePriority={changePriority}
            />
          )
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoList;
