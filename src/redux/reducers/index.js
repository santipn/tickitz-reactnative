import { combineReducers } from 'redux'
import Auth from '../reducers/Auth'
import Register from '../reducers/Register'
import Movies from '../reducers/Movies'

const rootReducers = combineReducers({
    auth: Auth,
    register: Register,
    movies: Movies,
})

export default rootReducers