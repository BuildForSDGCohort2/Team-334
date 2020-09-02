export const signIn = (creds) => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(creds.email, creds.password).then(() => {
			dispatch({ type: 'LOGIN_SUCCESS' })
		}).catch(err => {
			dispatch({ type: 'LOGIN_ERROR', err })
		})
	}
}

export const signOut = () => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();

		firebase.auth().signOut().then(() => {
			dispatch({ type: 'SIGNOUT_SUCCESS'});
		});
	}
}

export const signUp = (newUser) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then((res) => {
			return firestore.collection('users').doc(res.user.uid).set({
				firstname: newUser.firstname,
				lastname: newUser.lastname,
				email: newUser.email,
				initials: newUser.firstname[0] + newUser.lastname[0]
			})
		}).then(() => {
			dispatch({ type: 'SIGNUP_SUCCESS'});
		}).catch(err => {
			dispatch({ type: 'SIGNUP_ERROR', err})
		})
	} 
}

export const demoCall = (creds) => {
	return (dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore();

	firestore.collection('demo').add({
		firstname: creds.firstname,
		lastname: creds.lastname,
		email: creds.email,
		gender: creds.gender,
		checkbox: creds.checkbox
	}).then(() => {
		dispatch({ type: 'DEMO_SUCCESS'})
	}).catch(err => dispatch({ type: 'DEMO_ERROR', err}))
	}
}