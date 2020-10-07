import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Verify = ({ handleVerify, handleVerifySubmit }) => {
	return (
		<Container>
			<h5 className="text-center mt-3">Enter the verification code</h5>
			<Form className="my-3" onSubmit={handleVerifySubmit}  style={{ maxWidth: '600px'}} >
				<Form.Group>
					<Form.Control type="number" id="v-code" placeholder="Enter code" onChange={handleVerify} />
				</Form.Group>
				<Button type="submit">Submit</Button>
			</Form>
		</Container>
	)
}

export default Verify;