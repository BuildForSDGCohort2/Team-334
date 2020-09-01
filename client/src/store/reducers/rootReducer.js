import authReducer from './authReducer.js'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
	auth: authReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducer