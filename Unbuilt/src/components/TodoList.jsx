import React from 'react';
import Todo from "./Todo";

function TodoList({ todos }) {
    return (
        <div className='todoList'>
            {
                todos && todos.map(todo => (
                    // todos tanımlı ise maplenir
                    <Todo key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodoList