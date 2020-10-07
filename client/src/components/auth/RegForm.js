import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const RegForm = ({
	handleFirstname, 
	handleLastname,
	handleEmail,
	handlePassword,
	handleGuardian,
	handleSubmit
}) => {
	const [age, setAge] = useState('');
	return (
		<Container>
			<h3 className="text-center mt-3">Register</h3>
			<Form className="my-5" style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit} >
				<Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" id="firstname" placeholder="Enter First name" onChange={handleFirstname} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" id="lastname" placeholder="Enter Last name" onChange={handleLastname} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" id="email" placeholder="Enter email" onChange={handleEmail} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" id="password" placeholder="Enter password" onChange={handlePassword} />
				</Form.Group>
				<Form.Group controlId="agecategory">
					<Form.Label>Age Category</Form.Label>
					<Form.Control as="select" onChange={e => setAge(e.target.value)} >
						<option>18 and above</option>
						<option>under 18</option>
					</Form.Control>
				</Form.Group>
				{age === 'under 18' ? (
					<Form.Group>
						<Form.Label>Parent's Email</Form.Label>
						<Form.Control type="email" id="email" placeholder="Enter Guardian's email" onChange={handleGuardian} />
					</Form.Group>
				) : (null)}
				<Form.Group controlId="checkbox">
					<Form.Check type="checkbox" label="Sign me in to newsletter"/>
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
		</Container>
	)
}

export default RegForm