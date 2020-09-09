import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'

const SignIn = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault();
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


export default connect()(SignIn)