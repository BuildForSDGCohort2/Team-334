import React from 'react'
import { Container } from 'react-bootstrap' 

const Footer = () => {

	return (
		<div>
			<Container fluid className="bg-dark text-white text-center">
				<h5>Mission</h5>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor minus ea commodi vel pariatur soluta sunt.</p>
				
				<a href="#home"><i className="fab fa-lg fa-linkedin"></i></a>
				<a href="#home"><i className="fab fa-lg fa-twitter px-2"></i></a>
				<a href="#home"><i className="fab fa-lg fa-github"></i></a>
				<a href="#home"><i className="fab fa-lg fa-facebook px-2"></i></a>
			</Container>
		</div>
		)
}

export default Footer