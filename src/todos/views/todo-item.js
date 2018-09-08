import React from 'react'

const TodoItem = ({ toggleTodo, removeTodo, completed, text }) => {
    const checkedProp = completed ? {checked: true} : {};
    return (
        <li className='todo-item'
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <input className='toggle'
                type='checkbox'
                {...checkedProp}
                readOnly
                onClick={toggleTodo}
            />
            <label className='text'>{text}</label>
            <button className='remove' onClick={removeTodo}>x</button>
        </li>
    )
}

export default TodoItem