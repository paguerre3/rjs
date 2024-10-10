import { useState } from "react"
export default function TodoInput(props) {
    const { handleAddTodo, todoValue, setTodoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo ..."/>
            <button onClick={() => {
                handleAddTodo(todoValue)
                // reset to an empty value affter aggregating a new todo:
                setTodoValue('')
                }}>Add</button>
        </header>
    )
}