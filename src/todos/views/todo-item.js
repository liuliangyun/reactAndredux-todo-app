import React from 'react'

const TodoItem = ({ toggleTodo, removeTodo, completed, text }) => {
    return (
        <li className='todo-item' 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <input className='toggle'
                    type='checkbox' 
                    checked={completed ? 'checked': ''} 
                    readOnly
                    onClick = {toggleTodo}
            />
            <label className='text'>{text}</label>
            <button className='remove' onClick={removeTodo}>X</button>
        </li>
    )
}

export default TodoItem