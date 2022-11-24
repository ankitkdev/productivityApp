import React from 'react';

const Todoform = ({inputField,setInputField,todos,setTodos,setStatus}) => {

    const inputHandler = (e) => {
        setInputField(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputField || /^\s*$/.test(inputField)){
            return
        }
        setTodos([...todos, {text:inputField, completed:false, id:Math.floor(Math.random()*10000)}])
        setInputField('')
    }

    // console.log(todos)

    return (
        <>
            <form className='d-flex' onSubmit={handleSubmit}>

                <input className='form-control' 
                type="text"  
                name='todoName' 
                value={inputField} 
                placeholder="Enter the todo name" 
                onChange={inputHandler}
                />

                <button 
                className='btn btn-danger col-3'
                type='submit'                
                >Add Todo</button>
            </form>

            {/* <Todolist 
                storeTodo={storeTodo}
                setTodoField={setTodoField}
            /> */}
            
        </>
    )
}

export default Todoform