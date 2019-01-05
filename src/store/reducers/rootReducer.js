import authReducer from './authReducer'
import budgetReducer from './budgetReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  budget: budgetReducer,
  firestore: firestoreReducer
})

export default rootReducer