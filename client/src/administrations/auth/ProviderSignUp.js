import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/providerAction'

const SignUp = ({ signUp }) => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		signUp(firstname, lastname, password, email);
	}

	const { auth } = this.props;
	if (auth.uid) return <Redirect to="/" />

	return (
		<Container>
			<div className="text-center mt-3">Register</div>
			<Form className="my-5" style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit} >
				<Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" id="firstname" placeholder="Enter First name" onChange={e => setFirstname(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" id="lastname" placeholder="Enter Last name" onChange={e => setLastname(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" id="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
				</Form.Group>
				<Button type="submit">Submit</Button>
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
		signUp: (creds) => dispatch(signUp(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
