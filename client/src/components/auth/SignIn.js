import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions.js'
import { Redirect } from 'react-router-dom'
import Navbar from '../dashboard/sections/Navbar'

const SignIn = ({ signIn, auth }) => {
	const[email, setEmail] = useState('');
	const[password, setPassword] = useState('');
	
	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
		signIn({email, password});
	}
	if (auth.uid) return <Redirect to="user" />
	return (
		<>
			<Navbar />
			<Container className="my-5">
				<h4 className="text-center">Signin</h4>
				<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
					<Form.Group controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
					</Form.Group>
					<Button type="submit">Login</Button>
				</Form>
			</Container>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)