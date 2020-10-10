import axios from 'axios';

export const signUp = ({ firstname, lastname, email, password }) => {
	console.log(firstname, lastname, email, password)
	return (dispatch, getState) => {
		axios.post('/api/reg', {
			firstname,
			lastname,
			email,
			password
		}).then(({ data }) => {
			console.log(data);
			dispatch({ type: 'PROVIDER_SUCCESS', data})
		}).catch(err => dispatch({ type: 'PROVIDER_ERROR', err}))
	}
}

export const signIn = ({ email, password}) => {
	console.log(email, password)
	return (dispatch, getState) => {
		axios.post('/api/user/auth', {
			email,
			password
		}).then(({ data }) => {
			dispatch({ type: 'PROVIDER_LOGGED', data})
		})
		.catch(err => dispatch({ type: 'PROVIDER_FAILED', err}))
	}
}

export const signOut = () => {
	return (dispatch, getState) => {
		dispatch({ type: 'LOGOUT_SUCCESS'})
	}
}
