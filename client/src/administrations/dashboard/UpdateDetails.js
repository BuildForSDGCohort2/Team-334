import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'

const UpdateDetails = ({ data }) => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [status, setStatus] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();
		const { email } = data;
		axios.post('/api/user/auth/update', {
			email,
			firstname,
			lastname
		}).then(({data}) => {
			if(data.msg) {
				setStatus(data.msg);
			}
		}).catch(err => console.log(err))
	}

	// if (auth.uid) return <Redirect to="/" />
	return (
		<Container className="update-wrapper">
			<h3 className="text-center mt-3">Update details</h3>
			<Form className="my-5" style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit} >
				<Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" id="firstname" placeholder="First name" onChange={e => setFirstname(e.target.value)} />
				</Form.Group>
				<Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" id="lastname" placeholder="Last name" onChange={e => setLastname(e.target.value)} />
				</Form.Group>
				<Button type="submit">Update</Button>
				<p className="text-center text-success my-3">{status}</p>
			</Form>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		data: state.provider.data
	}
}

export default connect(mapStateToProps)(UpdateDetails);
