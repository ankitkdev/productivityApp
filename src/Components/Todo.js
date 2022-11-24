import React from 'react'

import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'

const Todo = ({ key, todo, setTodos, text, todos }) => {

  console.log(todos);


  return (
    <>
      <div className='form-group' key={key}>
        {todo.completed === false ?
          <BiCheckbox className='icon fs-4' /> :
          <BiCheckboxChecked className='icon fs-4' />
        }
        <span>{text}</span>
      </div>
    </>
  )
}

export default Todo