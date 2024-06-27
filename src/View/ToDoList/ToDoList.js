// src/components/TodoList.js

import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../ToDoItem/ToDoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // Get the todos from Redux state

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

