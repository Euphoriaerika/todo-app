import React, { useState, useRef, useEffect } from "react";

import { arrowright } from "../../assets/icons";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // State to store the input value
  const [isAdding, setIsAdding] = useState(false); // State to track whether to show the input field
  const inputRef = useRef(null); // Reference to the input element

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (value.trim()) { // Check if input value is not empty
      addTodo(value); // Call the addTodo function with the input value
      setValue(""); // Clear the input field after submission
      setIsAdding(false); // Hide the input field
    }
  };

  // Function to handle button click to show the input field
  const handleButtonClick = () => {
    setIsAdding(true); // Show the input field
  };


  // Function to handle blur event (losing focus)
  const handleBlur = (e) => {
    // Check if the blur event is not related to the input field or the submit button
    if (
      e.relatedTarget !== inputRef.current &&
      e.relatedTarget?.type !== "submit"
    ) {
      setIsAdding(false); // Hide the input field
    }
  };

  // Effect to focus on the input field when it is shown
  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus(); // Focus on the input field
    }
  }, [isAdding]);

  return (
    <div className="h-40 border-1">
      {!isAdding ? (
        <button className="full-size" onClick={handleButtonClick}>
          Add Task
        </button>
      ) : (
        <form className="full-size flex" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="full-size p-h-12"
            value={value}
            type="text"
            placeholder="Enter a title for this task..."
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            autoFocus
          />
          <button className="box-40" type="submit">
            <img className="full-size" src={arrowright} />
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoForm;
