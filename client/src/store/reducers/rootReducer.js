import authReducer from './authReducer'
import providerReducer from './providerReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
	auth: authReducer,
	provider: providerReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducer