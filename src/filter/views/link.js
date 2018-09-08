import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'


//children属性是任何一个React组件的可以访问到的一个属性，代表的是被包裹住的子组件
const Link = ({ active, children, onClick }) => {
    //当active为true，即当前状态就是被选中的过滤器，不该再次被选择，不渲染超链接标签a
    //否则渲染一个超链接标签a
    if (active) {
        return <b className='filter selected'>{children}</b>
    }
    return (
        <a href='#'   //#的目的是让浏览器给超链接显示出下划线
            className='filter not selected'
            onClick={(e) => {
                e.preventDefault()  //取消一个超链接的默认跳转行为
                onClick()
            }}
        >
            {children}
        </a>
    )
}

const mapStateToProps = (state, ownProps) => ({
    active: state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)