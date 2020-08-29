import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Benefits = () => {
	return (
		<Container fluid className="my-3 text-center text-dark">
			<Row className="justify-content-center">
				<Col xs={12} md={4}>
					<div className="my-5">
						<i className="fas fa-business-time  fa-3x my-3"></i>
						<h5> Saves Time </h5>
						<p> Telemedicine saves you a lot of time wich you could use to do something productive </p>
					</div>
				</Col>

				<Col xs={12} md={4}>
					<div className="my-5">
						<i className="fas fa-hand-holding-usd fa-3x my-3"></i>
						<h5> Saves you money </h5>
						<p> Telemedicine saves you money by cutting transport expenses </p>
					</div>
				</Col>

				<Col xs={12} md={4}>
					<div className="my-5">
						<i className="fas fa-minus-circle fa-3x my-3"></i>
						<h5> Less Interference </h5>
						<p> There is a little chance of interference from external factors than in-person visit </p>
					</div>
				</Col>

				<Col xs={12} md={4}>
					<div className="my-5">
						<i className="fas fa-mask fa-3x my-3 my-3"></i>
						<h5> Privacy </h5>
						<p> Telemedicine makes you visit private unless shared with your own consent </p>
					</div>
				</Col>

				<Col xs={12} md={4}>
					<div className="my-5">
						<i className="fas fa-user-shield fa-3x my-3"></i>
						<h5> Safer </h5>
						<p> Visiting virtually prevents you from being exposed to other potentially contagious patients </p>
					</div>
				</Col>
			</Row>
		</Container>
		)
}

export default Benefits