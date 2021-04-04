import {createStore, combineReducers} from 'redux'
import cityReducer from './reducers/cityReducer'

const rootReducer = combineReducers({
  city: cityReducer,
})

const configureStore = () => {
  return createStore(rootReducer)
}
export default configureStore
