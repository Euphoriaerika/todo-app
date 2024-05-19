import { useState } from "react";
import TodoForm from "./TodoForm";

import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import TodoFormEdit from "./TodoFormEdit";
uuidv4();

const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([
      ...todoList,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplite = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done!</h1>

      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todoList.map((todo) =>
          todo.isEditing ? (
            <TodoFormEdit editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              toggleComplite={toggleComplite}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;