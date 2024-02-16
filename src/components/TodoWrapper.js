import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import "../styles/todo.css";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
uuidv4();

export const TodoWrapper = () => {
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

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <Todo
            task={todo}
            key={index}
            toggleComplite={toggleComplite}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
