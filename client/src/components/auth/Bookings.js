import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Bookings = () => {
	return (
		<Container className="my-5 text-dark">
			<h2 className="text-center mb-4">Hire Professionals Now</h2>
			<Row>
				<Col>
					<Card style={{ width: '18rem' }} >
						<Card.Img variant="top" src="" />
						<Card.Body>
							<Card.Title>Dr. Fadilah Yunus</Card.Title>
							<Card.Text>
								<ul>
									<li>Neurologist</li>
									<li>Dentist</li>
								</ul>
							</Card.Text>
							<Button variant="outline-primary" className="btn-block">Visit</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }} >
						<Card.Img variant="top" src="" />
						<Card.Body>
							<Card.Title>Dr. Nana Yunus</Card.Title>
							<Card.Text>
								<ul>
									<li>Neurologist</li>
									<li>Dentist</li>
								</ul>
							</Card.Text>
							<Button variant="outline-primary" className="btn-block" >Visit</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }} >
						<Card.Img variant="top" src="" />
						<Card.Body>
							<Card.Title>Dr. Nana Yunus</Card.Title>
							<Card.Text>
								<ul>
									<li>Neurologist</li>
									<li>Dentist</li>
								</ul>
							</Card.Text>
							<Button variant="outline-primary" className="btn-block" >Visit</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Bookings