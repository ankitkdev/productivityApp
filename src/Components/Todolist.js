import React from 'react'

const Todolist = (props) => {
   
   
    return (
        <>
            {props.storeTodo && props.storeTodo.map((itms, i) => {
                return (
                    <>

                        <div class="form-check col-12 py-2" key={i}>
                            <input class="form-check-input" type="checkbox" value="" id={`todoCheck-${i}`} />
                            <label class="form-check-label" for={`todoCheck-${i}`}>
                                {itms}
                            </label>
                        </div>
                    </>
                )

            })}
        </>
    )
}

export default Todolist