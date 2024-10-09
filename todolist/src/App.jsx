import { useState } from 'react'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// functional component:
function App() {
  // useSate for variables that have state, i.e. they can be updated by the user:
  const [todos, setTodos] = useState([
    'fix the car', 
    'clean the swimming pool',	 
    'help my parents'
  ])

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    console.log(newTodoList)
    setTodos(newTodoList)
  }

  return (
    // react fragment. Only one return is allowed, if multiple components required embeed them in <> empty fragment:
    // passinng todos as props inside embeded component (not as "children" and instead as "todos" for a neat understanding):
    <>
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
