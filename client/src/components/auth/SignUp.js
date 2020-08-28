import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'

class SignUp extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefaut();
		console.log(this.state)
	}

	render() {
		return (
			<Container>
				<Form className="my-4" >
					<Form.Group>
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" id="firstname" placeholder="Enter First Name" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" id="lastname" placeholder="Enter Last Name" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" id="email" placeholder="Enter Email" onChange={this.handleChange} />
					</Form.Group>
					<Button variant="dark" type="submit">Submit</Button>
				</Form>
			</Container>
			)
	}
}

export default SignUp