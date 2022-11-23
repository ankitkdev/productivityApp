import React from 'react'

const Todoform = () => {
  return (
    <>
        <form className='d-flex'>
            <input className='form-control' name='todo' placeholder="Enter the todo name" />
            <button className='btn btn-danger'>Add Todo</button>    
        </form>            
    </>
  )
}

export default Todoform