import React, {useState, useEffect} from 'react';
import './App.css';
//Importing components
import Form from "./components/Form"
import Todolist from './components/TodoList';

function App() {
  //state stuff
  const[inputText,setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status,setStatus] = useState("all");
  const[filteredTodos, setFilterTodos] = useState([]);
  //only run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));    
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Taylor's Todo List</h1>
      </header>
      <Form
        inputText = {inputText} 
        todos = {todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <Todolist 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos ={todos}
      />
    </div>
  );
}

export default App;
