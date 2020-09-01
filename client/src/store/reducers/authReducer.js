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
			return state
		case 'SIGNUP_ERROR':
			console.log('Signed up failed');
			return {
				authError: action.err.message
			}
		default:
		 return state
	}
}

export default authReducer