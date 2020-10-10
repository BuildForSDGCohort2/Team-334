import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Container, Form  } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'

const Book = (props) => {

	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');

	const { id } = props.match.params;
	const { uid } = props.auth;

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, msg, id);
		axios.post('/api/reg/patient', {
			email,
			uid,
			msg,
			_id: id
		}).then(({ data }) => {
			if(data.result) {
				console.log("Email sent");
				alert('Book Successfully, Will respond soon!!!');
				// <Redirect to="/user" />
			} else {
				alert("There's an Error, Try again later");
			}
		}).catch(err => console.log(err));
	}

	return (
		<>
			<Container className="my-5">
				<h4 className="text-center my-3">Book Now!</h4>
				<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Your Email Address" onChange={e => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="msg">
						<Form.Label>Message</Form.Label>
						<Form.Control type="text" placeholder="Enter Message" onChange={e => setMsg(e.target.value)} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		</>
	)

}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Book);