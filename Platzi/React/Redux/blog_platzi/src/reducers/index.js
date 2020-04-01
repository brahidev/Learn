import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import publicationsReducer from './publicationsReducer'
import tareasReducer from './tareasReducer'

export default combineReducers({
    usersReducer,
    publicationsReducer,
    tareasReducer
})