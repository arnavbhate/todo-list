import React, { useState, useEffect } from 'react';
import './App.css';
import NewItemForm from './components/NewItemForm';
import List from './components/List';

function App() {
  // Local Storage
  const localStorageItem = localStorage.getItem('todoItems');
  let parsed = [];
  if (localStorageItem !== null) {
    parsed = JSON.parse(localStorageItem);
  }

  // State
  const [inputText, setInputText] = useState('');
  const [todoItems, setTodoItems] = useState(parsed);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('all');

  // Effects
  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredItems(todoItems.filter(item => item.completed === true));
        break;
      case 'incomplete':
        setFilteredItems(todoItems.filter(item => item.completed === false));
        break;
      default:
        setFilteredItems(todoItems);
        break;
    }
  }, [todoItems, filter]);
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className="App">
      <div className="header">
        <span className="header-item">To Do list</span>
      </div>
      <NewItemForm inputText={inputText} setInputText={setInputText} todoItems={todoItems} setTodoItems={setTodoItems} />
      <List todoItems={todoItems} setTodoItems={setTodoItems} filteredItems={filteredItems} setFilter={setFilter} />
    </div>
  );
}

export default App;
