import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

const SignUp = () => {
	const [signup, setSignup] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	})

	const handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefaut();
		console.log(this.state)
	}

	return (
		<Container>
			<Form className="my-5" style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit} >
				<Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" id="firstname" placeholder="Enter First name" onChange={handleChange} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" id="lastname" placeholder="Enter Last name" onChange={handleChange} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" id="email" placeholder="Enter email" onChange={handleChange} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" id="password" placeholder="Enter password" onChange={handleChange} />
				</Form.Group>
				<Form.Group controlId="gender">
				<Form.Label>Gender</Form.Label>
				<Form.Control as="select" onChange={handleChange}>
					<option>select</option>
					<option>male</option>
					<option>female</option>
				</Form.Control>
				</Form.Group>
					<Form.Group controlId="checkbox">
					<Form.Check type="checkbox" label="Sign me in to newsletter" onChange={handleChange} />
				</Form.Group>
				<Button type="submit">Submit</Button>
				<Button block className="my-4"><i className="fab fa-facebook"></i> Signup with facebook</Button>
			</Form>
		</Container>
		)
}

export default SignUp