import Header from "./Components/Header";
import Todoform from "./Components/Todoform";
import './App.css';
import React, { useState, useEffect } from "react";
import Todolist from "./Components/Todolist";

function App() {

  const [inputField, setInputField]=useState('');
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [status,setStatus]=useState('all');
  const [filtertodos,setFilteredTodos]=useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const saveToLocal = React.useCallback(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos)
    }
  };

  useEffect(() => {
    const handleFiltering = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    handleFiltering();
    saveToLocal();
  }, [todos, status, saveToLocal]);

  const handleRemoveAll = () => {
    setTodos([]);
  }

  return (
    <>

      <div className="container h-100 my-5 d-flex justify-content-center align-items-center">
        <div>
          <Header />
          <Todoform 
              inputField={inputField}
              setInputField={setInputField}
              todos={todos}
              setTodos={setTodos}
              setStatus={setStatus}
          />
          <Todolist
             todos={todos}
             setTodos={setTodos}
             filtertodos={filtertodos}
          />
          {todos.length > 0 && 
        <button 
          type='button' 
          name='clear-all' 
          value='delete'
          className='btn btn-success'
          onClick={handleRemoveAll}
        > Remove all
      </button>}
      </div>
        </div>
    </>

  );
}

export default App;
