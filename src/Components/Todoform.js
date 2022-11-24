import React, {useState} from 'react';

const Todoform = ({ inputField, setInputField, todos, setTodos, setStatus }) => {
    const [isClicked, setIsClicked] = useState('');

    const inputHandler = (e) => {
        setInputField(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputField || /^\s*$/.test(inputField)) {
            return
        }
        setTodos([...todos, { text: inputField, completed: false, id: Math.floor(Math.random() * 10000) }])
        setInputField('')
    }

    const handleTaskStatus = (event) => {
        setStatus(event.target.value);
        setIsClicked( event.target.value);
      };
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
            {todos.length > 0 && 
            <div className='d-flex justify-content-between mt-2'>
                <button onClick={handleTaskStatus} type='button' name='filter' value='all' className={`btn btn-success ${isClicked === 'all' ? 'active' : ''}`} key='button1'> All</button>
                <button onClick={handleTaskStatus} type='button' name='filter' value='completed' className={`btn btn-secondary ${isClicked === 'completed' ? 'active' : ''}`} key='button2'> Completed</button>
                <button onClick={handleTaskStatus} type='button' name='filter' value='uncompleted' className={`btn btn-info ${isClicked === 'uncompleted' ? 'active' : ''}`} key='button3'> Uncompleted</button>
            </div>
}
        </>
    )
}

export default Todoform