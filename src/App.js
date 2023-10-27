import './App.css';
import NewItemForm from './components/NewItemForm.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <span className="header-item">To Do list</span>
      </div>
      <NewItemForm />
    </div>
  );
}

export default App;
