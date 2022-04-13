import { combineReducers } from 'redux'
import noteReducers from './noteReducer'

export default combineReducers({
    productsRedux: noteReducers
})