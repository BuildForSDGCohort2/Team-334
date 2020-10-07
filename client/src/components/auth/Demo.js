import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { demoCall } from '../../store/actions/authActions.js'
import { Redirect } from 'react-router-dom'
import Navbar from '../dashboard/sections/Navbar'

const Demo = ({ demoCall, auth }) => {

	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState('');
	const [subs, setSubs] = useState(false);
	
	const handleSubmit = e => {
		e.preventDefault();
		demoCall({firstname, lastname, email, age, subs});
		console.log(firstname, lastname, email, age, subs);
	}
	
	if (auth.uid) return <Redirect to="/" />
	return (
		<>
			<Navbar />
			<Container className="my-5">
				<h2 className="text-center">Request Demo</h2>
				<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
					<Form.Group controlId="firstname">
						<Form.Label>First name</Form.Label>
						<Form.Control type="text" placeholder="Enter First Name" onChange={e => setFirstname(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="lastname">
						<Form.Label>Last name</Form.Label>
						<Form.Control type="text" placeholder="Enter Last Name" onChange={e => setLastname(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="gender">
						<Form.Label>Age</Form.Label>
						<Form.Control as="select" onChange={e => setAge(e.target.value)}>
							<option>less than 18</option>
							<option>18 ~ 35</option>
							<option>above 35</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="checkbox">
						<Form.Check type="checkbox" label="Sign me in for newsletter" onChange={e => setSubs(true)} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		</>
	)
}

const mapStateToProp = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = dispatch => {
	return {
		demoCall: creds => dispatch(demoCall(creds))
	}
}

export default connect(mapStateToProp, mapDispatchToProps)(Demo)