import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions.js'

const SignIn = (props) => {
	const [login, setLogin] = useState({
		email: '',
		password: ''
	})
	const handleChange = e => {
		setLogin({
			...login,
			[e.target.id]: e.target.value
		});
		console.log(e.target.id, e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault();
		console.log(login, login.email, login.password);
		//props.signIn(login);
	}
	console.log(props)
	return (
		<Container className="my-5">
			<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" onChange={handleChange} />
				</Form.Group>
				<Button type="submit">Submit</Button>
				<Button block className="my-4" type="submit"><i className="fab fa-facebook fa-md"></i> Signin with facebook</Button>
			</Form>
		</Container>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(null, mapDispatchToProps)(SignIn)