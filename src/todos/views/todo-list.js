import React from 'react'
import { connect } from 'react-redux'
import { FilterTypes } from '../../constants'
import TodoItem from './todo-item'
import { toggleTodo, removeTodo } from '../actions';

//傻瓜组件
const TodoList = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <ul className='todo-list'>
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}       //每个子组件都必须带上key属性，且一定要是唯一标志这个子组件的值
                        text={item.text}
                        completed={item.completed}
                        toggleTodo={() => toggleTodo(item.id)}
                        removeTodo={() => removeTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
}

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        removeTodo: (id) => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)