import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Demo = () => {
	const [form, setForm] = useState({
		firstname: '',
		lastname: '',
		email: '',
		gender: '',
		checkbox: ''
	})
	const handleChange = e => {
		setForm({
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = e => {
		e.preventDefault();
	}
	return (
		<Container className="my-5">
			<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
			<Form.Group controlId="firstname">
				<Form.Label>First name</Form.Label>
				<Form.Control type="text" placeholder="Enter First Name" onChange={handleChange} />
			</Form.Group>
			<Form.Group controlId="lastname">
				<Form.Label>Last name</Form.Label>
				<Form.Control type="text" placeholder="Enter Last Name" onChange={handleChange} />
			</Form.Group>
			<Form.Group controlId="email">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
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
		</Form>
		</Container>
		)
}

export default Demo