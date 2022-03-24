import {createStore,combineReducers} from 'redux'
import Reducers from './Reducers'

const store = createStore(combineReducers({
    todos:Reducers}))

export default store