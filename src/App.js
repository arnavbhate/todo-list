import React, { useState } from 'react';
import './App.css';
import NewItemForm from './components/NewItemForm';
import List from './components/List';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <span className="header-item">To Do list</span>
      </div>
      <NewItemForm inputText={inputText} setInputText={setInputText} todoItems={todoItems} setTodoItems={setTodoItems} />
      <List todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}

export default App;
