import {createStore} from 'redux'
import changeReducer from './reducer'
let store = createStore(changeReducer)
export default store