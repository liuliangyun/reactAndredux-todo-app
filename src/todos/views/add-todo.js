import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

    refInput(node) {     //参数node就是input元素的真实DOM        
        this.input = node
    }

    onSubmit(e) {
        e.preventDefault()     //取消浏览器的默认提交后的跳转行为

        const input = this.input
        if (!input.alue.trim()) { //如果输入框为空白，则忽略
            return;
        }
        this.props.addTodo(input.value) //否则调用添加todo函数，并将输入框置空
        input.value = ''
    }

    // 组件完成装载时，检查ref属性是不是一个函数，如果是就会调用这个函数，参数就是这个组件代表的真实的DOM元素，
    // 由于直接操作了DOM，因此是不推荐的用法
    render() {
        return (
            <div className='add-todo'>
                <form onSubmit={() => this.onSubmit}>
                    <input className='new-todo' ref={() => this.refInput} />
                    <button className='add-btn' type='submit'>
                        添加
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => {
        dispatch(addTodo(text))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)