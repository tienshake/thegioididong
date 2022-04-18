import { combineReducers } from 'redux'
import noteReducers from './noteReducer';
import userReducer from './userReducer';

export default combineReducers({
    productsRedux: noteReducers,
    userRedux: userReducer
})