import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import Use from '../assets/uses.jpg'

const Applicatins = () => {
	const imgStyle = {
		position: "relative",
		width: "50%",
		left: "25%"
	}
	return (
		<Jumbotron className="mb-0">
			<Container className="text-dark">
				<Container fluid className="mb-5">
					<img src={Use} alt="Applicatins"  style={imgStyle} />
				</Container>
				<h4 className="mb-5 text-center"> Applications of Telemedicine </h4>
				<p className="text-center"> Telemedicine can be define as the use of technology (Computers, Video, Phone or Messaging) by medical professionals to diagnose and treat patients in a remote location </p>
				<Row>
					<Col>
						<ul>
							<li>Follow-up visits</li>
							<li>Remote chronic disease management</li>
						</ul>
					</Col>
					<Col>
						<ul>
							<li>Remote post-hospitalisation care</li>
							<li>Preventive care support</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
		)
}

export default Applicatins;