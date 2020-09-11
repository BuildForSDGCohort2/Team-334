import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/providerAction'
// import { Redirect } from 'react-router-dom'

const SignIn = ({ signIn }) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault();
		signIn(email, password);
	}

	// if (auth.uid) return <Redirect to="/" />
	return (
		<Container className="my-5">
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
				<Button block className="my-4" type="submit"><i className="fab fa-facebook fa-md"></i> Signin with facebook</Button>
			</Form>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		token: state.provider.data.token,
		user: state.provider.data.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)