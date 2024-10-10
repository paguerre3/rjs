//rfc
import React from 'react'

export default function TodoCard(props) {
  // deestruct children!
  // to render data passed in TodoList component from props: 
  const { children, handleRemoveTodo, index, handleUpdateTodo } = props
  return (
    <li className='todoItem'>
        {children}
        <div className="actionsContainer">
            <button onClick={() => handleUpdateTodo(index)}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => handleRemoveTodo(index)}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
