import React, { useState } from 'react'
import Todolist from './Todolist';

const Todoform = () => {

    const [todoField, setTodoField] = useState('');
    const [storeTodo, setStoreTodo] = useState([]);
    const [error,setError]=useState('')

    const addTodo = (e) => {
        e.preventDefault();
        if(todoField===''){
            setError('Please do not leave blank');
        }
        else{
            setStoreTodo([...storeTodo, todoField ]);
            setError('');
            setTodoField('')
        }
        
    }

    return (
        <>
        {error?<>{error}</>:<></> }
            <form className='d-flex'>
                <input className='form-control' name='todoField' value={todoField} onChange={(e) => setTodoField(e.target.value)} placeholder="Enter the todo name" />
                <button className='btn btn-danger col-3' onClick={addTodo}>Add Todo</button>
            </form>

            <Todolist 
                storeTodo={storeTodo}
            />
        </>
    )
}

export default Todoform