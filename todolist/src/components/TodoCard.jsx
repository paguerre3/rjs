//rfc
import React from 'react'

export default function TodoCard(props) {
  // deestruct children!
  // to render data passed in TodoList component from props: 
  const { children } = props
  return (
    <li className='todoItem'>
        {children}
        <div className="actionsContainer">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
        </div>
    </li>
  )
}
