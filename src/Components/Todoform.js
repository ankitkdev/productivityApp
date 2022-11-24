import React, { useState } from 'react'
import Todolist from './Todolist';

const Todoform = () => {

    const [todoField, setTodoField] = useState({
        todoName:'',
        id:Math.floor(Math.random()*1000),
        complete:false
    });

    const {todoName} = todoField;
    const [storeTodo, setStoreTodo] = useState([]);
    const [error,setError]=useState('')

    const todoHandler = (e) =>{
        setTodoField({...todoField,[e.target.name]:e.target.value,id:Math.floor(Math.random()*1000),complete:false})
    }

    const addTodo = (e) => {
        e.preventDefault();
        if(todoName===''){
            setError('Please do not leave blank');
        }
        else{
            setStoreTodo([...storeTodo, todoField] );
            setError('');
            setTodoField({
                todoName:''
            })
        }
        
    }


    return (
        <>
                {error?<>{error}</>:<></> }
            <form className='d-flex'>
                <input className='form-control' name='todoName' value={todoName} onChange={todoHandler} placeholder="Enter the todo name" />
                <button className='btn btn-danger col-3' onClick={addTodo}>Add Todo</button>
            </form>

            <Todolist 
                storeTodo={storeTodo}
            />
            
        </>
    )
}

export default Todoform