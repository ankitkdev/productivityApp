import React, { useState } from 'react'

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
            setStoreTodo([...storeTodo, todoField]);
            setError('');
        }
        
    }

    console.log(storeTodo)
    return (
        <>
        {error?<>{error}</>:<></> }
            <form className='d-flex'>
                <input className='form-control' name='todoField' value={todoField} onChange={(e) => setTodoField(e.target.value)} placeholder="Enter the todo name" />
                <button className='btn btn-danger col-3' onClick={addTodo}>Add Todo</button>
            </form>

            {storeTodo && storeTodo.map((itms) => {
                return (
                    <>
                        <div className='form-group py-2'>
                            <input type="checkbox" /> {itms}
                        </div>
                    </>
                )

            })}
        </>
    )
}

export default Todoform