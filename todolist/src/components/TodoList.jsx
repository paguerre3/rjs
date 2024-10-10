import TodoCard from "./TodoCard"

export default function TodoList(props) {
    // deestruct todos instead of children
    const { todos } = props

    return (
        <ul className="main">
            {todos.map((todo, index) => {
                return (
                    // <p>Value</p>: passing "todo" data inside compoment props (rendered as children inside TodoCard)
                    // Also, passing {...Props} received from TodoList to TodoCard component.
                    <TodoCard {...props} key={index} index={index}> 
                        <p>{todo}</p>
                    </TodoCard>    
                )
            })}
        </ul>
    )
}