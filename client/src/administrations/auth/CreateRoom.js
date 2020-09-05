import React, { useState } from 'react'
import { Container, Button, Form} from 'react-bootstrap'
import axios from 'axios'

const CreateRoom = () => {
	const [roomname, setState] = useState('');

	const handleChange = e => {
		setState(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(roomname)

		axios.post('/createroom', {
			roomname
		}).then(res => console.log(res)).catch(err => console.log(err))
	}
	return (
		<Container className="my-5">
			<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={handleSubmit}>
				<Form.Group controlId="roomname">
					<Form.Label>Room name</Form.Label>
					<Form.Control type="text" placeholder="Consult" onChange={handleChange} />
				</Form.Group>
				<Button type="submit" >CreateRoom</Button>
			</Form>
		</Container>
	)
}

export default CreateRoom;