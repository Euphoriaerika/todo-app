import { useState } from "react";
import TodoForm from "../services/todo/TodoForm";

import { v4 as uuidv4 } from "uuid";
import Todo from "../services/todo/Todo";
import TodoFormEdit from "../services/todo/TodoFormEdit";
uuidv4();

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        priority: "Medium",
        isEditing: false,
      },
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
    <div className="p-12">
      <h1 className="border-b-1-grey">Table Name</h1>

      <div className="border-1 m-v-12">
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
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoList;
