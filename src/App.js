import React, {useState} from 'react';
import './App.css';
//Importing components
import Form from "./components/Form"
import Todolist from './components/TodoList';

function App() {
  const[inputText,setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Taylor's Todo List</h1>
      </header>
      <Form
        inputText = {inputText} 
        todos = {todos} 
        setTodos={setTodos} 
        setInputText={setInputText}/>
      <Todolist todos ={todos}/>
    </div>
  );
}

export default App;
