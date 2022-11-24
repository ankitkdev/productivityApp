import Header from "./Components/Header";
import Todoform from "./Components/Todoform";
import './App.css';
import { useState } from "react";
import Todolist from "./Components/Todolist";

function App() {

  const [inputField, setInputField]=useState('');
  const [todos,setTodos] = useState([])
  const [status,setStatus]=useState('all');
  const [filtertodos,setFiltertodos]=useState([]);

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
