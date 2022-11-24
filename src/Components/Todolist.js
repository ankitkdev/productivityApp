import React from 'react'
import './Todolist.css'

import Todo from './Todo';

const Todolist = ({ todos, setTodos, filtertodos }) => {

    // console.log(todos)

    return (
        <>
            {filtertodos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        setTodos={setTodos}
                        text={todo.text}
                        todos={todos}
                    />
                )

            })}

        </>
    )
}

export default Todolist