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

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <Todo task={todo} key={index} />
        ))}
      </div>
    </div>
  );
};
