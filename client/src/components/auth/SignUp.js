import React, { useState, useCallback } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions.js'
import Navbar from '../dashboard/sections/Navbar'
import { Redirect } from 'react-router-dom'
import RegForm from './RegForm'
import Verify from './Verify'

const SignUp = ({ signUp, auth }) => {

	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [guardian, setGuardian] = useState('above 18');
	const [vcode, setVcode] = useState('');
	// const [isVerifying, setIsVerifying] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	const handleFirstname = useCallback(e => {
		setFirstname(e.target.value);
	}, []);
	const handleLastname = useCallback(e => {
		setLastname(e.target.value)
	}, []);
	const handleEmail = useCallback(e => {
		setEmail(e.target.value)
	}, []);
	const handlePassword = useCallback(e => {
		setPassword(e.target.value)
	}, []);
	const handleGuardian = useCallback(e => {
		setGuardian(e.target.value)
	}, []);
	const handleVerify = useCallback(e => {
		setVcode(e.target.value);
	}, []);
	const handleV = useCallback(e => {
		setEmailSent(true)
	}, []);


	const handleVerifySubmit = useCallback(e => {
			e.preventDefault();
			console.log(vcode);
			axios.post('/api/register/verify', {
				code: vcode
			})
			.then(({ data }) => {
				const { firstname, lastname, email, password, guardian } = data;
				console.log(firstname, lastname, email, password);
				if(firstname && lastname && email) {
					signUp({firstname, lastname, email, password, guardian});
					console.log(firstname, lastname, email, password, guardian);
				}
			})
			.catch(err => console.log(err));
	}, [vcode, signUp]);

	const handleSubmit = useCallback(e => {
			e.preventDefault();
			console.log(firstname, lastname, email, password, guardian);
			axios.post('/api/register', {
				firstname,
				lastname,
				email,
				password,
				guardian
			})
			.then(({ data }) => {
				console.log(data);
				if(data.emailSent) {
					setEmailSent(true);
				}
			});
		},
		[firstname, lastname, email, password, guardian])

	if (auth.uid) return <Redirect to="/user" />
	return(
		<>
			<Navbar />
			{!emailSent ? <RegForm 
				handleFirstname={handleFirstname} 
		   		handleLastname={handleLastname}
				handleEmail={handleEmail}
				handlePassword={handlePassword}
				handleGuardian={handleGuardian}
				handleSubmit={handleSubmit}
				handleV={handleV}
			/> : <Verify handleVerify={handleVerify} handleVerifySubmit={handleVerifySubmit} />}
		</>
	)
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: creds => dispatch(signUp(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
