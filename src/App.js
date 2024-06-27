// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import AddTodo from '../src/View/AddToDo/AddTodo'; // Corrected import path
import TodoList from '../src/View/ToDoList/ToDoList'; // Corrected import path
import './App.css';

// Main application component
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
