const initState = {
	authError: null
}

const authReducer = (state = initState, action) => {
	switch(action.type){
		case 'LOGIN_SUCCESS':
			console.log('Login successful');
			return {
		 		authError: null
			}
		case 'LOGIN_ERROR':
			return {
				authError: 'Login failed'
			}
		case 'SIGNOUT_SUCCESS':
			console.log('Signout successful');
			return {
				authError: null
			}
		case 'SIGNUP_SUCCESS':
			console.log('Signed up successful');
			return {
				authError: null
			}
		case 'SIGNUP_ERROR':
			console.log('Signed up failed', action.err.message);
			return {
				authError: action.err.message
			}
		case 'DEMO_SUCCESS':
		console.log('Demo Success')
			return {
				authError: null
			}
		case 'DEMO_ERROR':
				console.log('Signedin for demo')
			return {
				authError: action.err.message
			}
		// case 'GET_Q':
		// 	console.log('GET_Q success');
		// 	return {
		// 		data: action.data,
		// 		authError: action.err.message
		// 	}
		case 'Q_ERROR':
			console.log('Q_ERROR');
			return {
				authError: action.err.message
			}
		case 'Q_ADDED':
			console.log('Q_	added');
			return {
				data: true,
				authError: null
			}
		default:
		 return state
	}
}

export default authReducer