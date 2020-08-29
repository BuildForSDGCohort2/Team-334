import React from 'react'
import { Container } from 'react-bootstrap' 

const Footer = () => {

	return (
		<div style={{backgroundColor: "#4169e1", height: "40vh"}}>
			<Container fluid className="text-light text-center">
				<div className="pt-5">
					<h5>Our mission</h5>
					<p>To help you have access to high-quality and effective care at any time</p>
					<a href="#home"><i className="fab fa-lg fa-linkedin text-light"></i></a>
					<a href="#home"><i className="fab fa-lg fa-twitter text-light px-2"></i></a>
					<a href="#home"><i className="fab fa-lg fa-github text-light"></i></a>
					<a href="#home"><i className="fab fa-lg fa-facebook text-light px-2"></i></a>
					<div>
						<span> &#169; Vcare </span>
						<span> 2020 |  <a className="text-light" href="#hem">support.virtualcare.com</a></span>
					</div>
				</div>
			</Container>
		</div>
		)
}

export default Footer