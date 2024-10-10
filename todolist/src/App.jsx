import { useState, useEffect } from 'react'
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

  const [todoValue, setTodoValue] = useState('')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    console.log(newTodoList)
    setTodos(newTodoList)
    persistTodosLocally(newTodoList)
  }

  function handleRemoveTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
    persistTodosLocally(newTodoList)
  }

  function handleUpdateTodo(index) {
    const valueToBeEdited = todos[index]
    // add new value to the index
    setTodoValue(valueToBeEdited)
    // remove index from old value, it isn't an edit, instead is a new at the last index and then remove original position. 
    handleRemoveTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, []) // empty dependency array means "run only once", only  when component renders for the first time.

  function persistTodosLocally(newTodoList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newTodoList }))
  }

  return (
    // react fragment. Only one return is allowed, if multiple components required embeed them in <> empty fragment:
    // passinng todos as props inside embeded component (not as "children" and instead as "todos" for a neat understanding):
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} handleUpdateTodo={handleUpdateTodo}/>
    </>
  )
}

export default App
