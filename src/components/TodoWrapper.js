import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import "../styles/todo.css";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([
      ...todoList,
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ]);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <button onClick={() => console.log(todoList)}>test</button>
    </div>
  );
};
