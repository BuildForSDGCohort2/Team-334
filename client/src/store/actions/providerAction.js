import axios from 'axios'

export const signUp = ({ firstname, lastname, email, password }) => {
	return (dispatch, getState) => {
		axios.post('/api/user', {
			firstname,
			lastname,
			email,
			password
		}).then(({ data }) => {
			dispatch({ type: 'PROVIDER_SUCCESS', data})
		}).catch(err => dispatch({ type: 'PROVIDER_ERROR', err}))
	}
}

export const signIn = ({ email, password}) => {
	return (dispatch, getState) => {
		axios.post('/api/user/auth', {
			email,
			password
		}).then(({ data }) => dispatch({ type: 'PROVIDER_LOGGED', data}))
		.catch(err => dispatch({ type: 'PROVIDER_FAILED', err}))
	}
}