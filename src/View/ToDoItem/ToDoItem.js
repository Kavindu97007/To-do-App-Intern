// src/components/TodoItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/action';


const TodoItem = ({ todo }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;

