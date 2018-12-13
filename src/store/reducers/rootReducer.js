import authReducer from './authReducer'
import budgetReducer from './budgetReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  budget: budgetReducer
})

export default rootReducer