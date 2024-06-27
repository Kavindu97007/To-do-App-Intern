// src/components/AddTodo.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/action'; // Corrected import path


const AddTodo = () => {
  const [text, setText] = useState(''); // Local state for the input text
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text)); // Dispatch the addTodo action
    setText(''); // Clear the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;

