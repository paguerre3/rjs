import TodoCard from "./TodoCard"

export default function TodoList(props) {
    // deestruct todos instead of children
    const { todos } = props
    return (
        <ul className="main">
            {todos.map((todo, index) => {
                return (
                    // passing "todo" data inside compoment props (rendered as children)
                    <TodoCard key={index}> 
                        <p>{todo}</p>
                    </TodoCard>    
                )
            })}
        </ul>
    )
}