export const signIn = ({ email, password }) => {
	return (dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
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

export const signUp = ({ firstname, lastname, email, password, guardian }) => {
	console.log(firstname, lastname, email, password);
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			email,
			password
		).then((res) => {
			return firestore.collection('users').doc(res.user.uid).set({
				firstname,
				lastname,
				email,
				guardian,
				q: [],
				initials: firstname[0] + lastname[0]
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
		age: creds.age,
		checkbox: creds.checkbox
	}).then(() => {
		dispatch({ type: 'DEMO_SUCCESS'})
	}).catch(err => dispatch({ type: 'DEMO_ERROR', err}))
	}
}

// export const getQ = (uid) => {
// 	console.log(uid);
// 	return (dispatch, getState, {getFirestore}) => {
// 		const firestore = getFirestore();
// 
// 		firestore.collection('users').get().then(doc => {
// 			console.log(doc)
// 			// dispatch({ type: 'GET_Q', data: res})
// 		})
// 		.catch(err => {
// 			console.log(err.message);
// 			dispatch({ type: 'Q_ERROR', err})
// 		})
// 	}
// }

export const addQ = ({ email, uid, fields }) => {
	console.log(email, uid, fields)
	return (dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore();

		firestore.collection('users').doc(uid)
			.update({ q: firestore.FieldValue.arrayUnion({fields, email}) })
			.then(res => dispatch({ type: 'Q_ADDED'}))
			.catch(err => console.log(err.message))


	} 
}
