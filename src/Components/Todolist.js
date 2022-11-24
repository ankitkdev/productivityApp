import React, { useState } from 'react'
import './Todolist.css'

const Todolist = (props) => {

    console.log(props.storeTodo)
    

    return (
        <>
            {props.storeTodo ? <>
                {props.storeTodo.map((itms, i) => {
                    return (
                        <>

                            <div 
                                className={`form-check col-12 py-2 alert alert-dark mt-2 
                                    
                                `} 
                            
                                htmlFor="alert" key={i}
                                
                            >
                                <input className="form-check-input" type="checkbox" value="" id={`todoCheck-${i}`} />
                                <label className="form-check-label" for={`todoCheck-${i}`}>
                                    {itms.todoName}
                                </label>
                            </div>
                        </>
                    )

                })}
            </> : ''}
        </>
    )
}

export default Todolist