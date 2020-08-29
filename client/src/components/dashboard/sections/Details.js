import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Details = () => {

	return (
		<Jumbotron fluid  style={{backgroundColor: "#4169e1", fontSize: "23px"}} className="mb-0">
			<Container className="text-center text-light">
				<p>Telemedicine allows healthcare professionals to evaluate, diagnose and treat patients at a distance using telecommunications technology. This approach to healthcare has shown positive impacts and is becoming an increasing part of the world healthcare infrastructure. </p>
			</Container>
		</Jumbotron>
		)
}

export default Details