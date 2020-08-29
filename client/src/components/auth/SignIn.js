import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

const SignIn = () => {
	const [login, setLogin] = useState({
		email: '',
		password: ''
	})
	const handleChange = e => {
		setLogin({
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = e => {
		e.preventDefault();
	}
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


export default SignIn