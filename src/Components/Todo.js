import React from 'react'
import "./Todo.css"
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'

const Todo = ({ key, todo, setTodos, text, todos }) => {

  const handleDelete = () => {
    setTodos(todos.filter(element => element.id !== todo.id));   
  };
  
   const handleComplete = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  };

  return (
    <>
      <div className='form-group alert alert-secondary mt-2 d-flex justify-content-between' key={key}>
        <span className={`${todo.completed ? 'completed' : ''}`}>
        {todo.completed === false ?
          <BiCheckbox onClick={handleComplete} className='icons fs-4' /> :
          <BiCheckboxChecked onClick={handleComplete} className='icons fs-4' />
        }
        <span>{text}</span>
        </span>
        <RiCloseCircleLine 
        className='icons fs-4'
        onClick={handleDelete}
      />
      </div>
    </>
  )
}

export default Todo