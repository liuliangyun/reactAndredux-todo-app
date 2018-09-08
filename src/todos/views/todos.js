import React from 'react'
import AddTodo from './add-todo'
import TodoList from './todo-list'
import './style.css'

//容器组件
export default () => {
    return (
        <div className='todos'>
            <AddTodo />
            <TodoList />
        </div>
    )
}