import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Contact = () => {
	return (
		<Jumbotron className="mb-0">
			<Container className=" text-dark text-center my-3 py-4">
				<h5>Contact Info</h5>
				<p> <i className="fas fa-mobile-alt fa-lg"></i>   +2347036311289</p>
				<p> <i className="fas fa-mobile fa-lg"></i>   abdoollahikbk@gmail.com</p>
				<p> <i className="fas fa-map-marker-alt fa-lg"></i>   no. 28, Kawo Kaduna</p>
			</Container>
		</Jumbotron>
		)
}

export default Contact