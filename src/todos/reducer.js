import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

const initState = []

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }, ...state]                    //返回一个增加了一个新对象的新数组，[]第一个参数为新对象
        case TOGGLE_TODO:
            return state.map(todoItem => {
                if (todoItem.id === action.id) {
                    return { ...todoItem, completed: !todoItem.completed } //返回一个字段值改变的新对象，{}第二个参数是被改变属性赋值
                }
                return todoItem
            })
        case REMOVE_TODO:
            return state.filter(todoItem => {
                return (todoItem.id !== action.id)
            })
        default:
            return state
    }
}

export default reducer