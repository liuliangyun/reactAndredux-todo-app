import { SET_FILTER } from './actionTypes'
import { FilterTypes } from '../constants'

const initState = FilterTypes.ALL

export default (state = initState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}