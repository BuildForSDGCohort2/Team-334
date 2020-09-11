const initState = { authError: null}

const providerReducer = (state = initState, action) => {
	switch(action.type) {
		case 'PROVIDER_SUCCESS':
			localStorage.setItem('token', action.data.token);
			return {
				authError: null,
				data: action.data
			}
		case 'PROVIDER_LOGGED':
			localStorage.setItem('token', action.data.token);
			return {
				authError: null,
				data: action.data
			}
		case 'PROVIDER_ERROR':
		case 'PROVIDER_FAILED':
			localStorage.removeItem('token');
			return {
				authError: action.err
			}
		default:
			return state
	}
}

export default providerReducer