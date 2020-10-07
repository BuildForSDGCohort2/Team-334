import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form  } from 'react-bootstrap'

const Book = (props) => {

	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');

	const { id } = props.match.params;

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, msg, id);
		axios.post('/api/reg/patient', {
			email,
			msg,
			_id: id
		}).then(res => {
			console.log("Email sent");
			alert('Book Successfully, Will respond soon!!!');
		}).catch(err => console.log(err));
	}

	return (
		<>
			<Container className="my-5">
				<h4 className="text-center my-3">Book Space Now!</h4>
				<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Your Email Address" onChange={e => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Message</Form.Label>
						<Form.Control type="password" placeholder="Enter Message" onChange={e => setMsg(e.target.value)} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		</>
	)

}

export default Book;