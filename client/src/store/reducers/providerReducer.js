const initState = { authError: null, data: JSON.parse(localStorage.getItem('auth'))  }

const providerReducer = (state = initState, action) => {
	switch(action.type) {
		case 'PROVIDER_SUCCESS':
			localStorage.setItem('auth', JSON.stringify(action.data));
			console.log('User created successfully');
			return {
				authError: null,
				data: JSON.parse(localStorage.getItem('auth'))
			}
		case 'PROVIDER_LOGGED':
			localStorage.setItem('auth', JSON.stringify(action.data));
			console.log('Logged in');
			return {
				authError: null,
				data: JSON.parse(localStorage.getItem('auth'))
			}
		case 'LOGOUT_SUCCESS':
			localStorage.removeItem('auth');
			return {
				state: undefined
			}
		case 'PROVIDER_ERROR':
		case 'PROVIDER_FAILED':
			localStorage.removeItem('auth');
			return {
				authError: action.err
			}
		default:
			return state
	}
}

export default providerReducer