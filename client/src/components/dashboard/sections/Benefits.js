import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Benefits = () => {
	return (
		<Container fluid className="my-3 text-center">
			<Row>
				<Col xs={12} md={4}>
					<Card>
						<Card.Header>
							<i className="fab fa-linkedin fa-3x"></i>
						</Card.Header>
						<Card.Body>
							<Card.Title> Lorem ipsum, dolor. </Card.Title>
							<Card.Text> Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Vitae, inventore. </Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col xs={12} md={4}>
					<Card>
						<Card.Header>
							<i className="fab fa-linkedin fa-3x"></i>
						</Card.Header>
						<Card.Body>
							<Card.Title> Lorem, ipsum, dolor. </Card.Title>
							<Card.Text> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, tempora? </Card.Text>
						</Card.Body>
					</Card>
				</Col>

				<Col xs={12} md={4}>
					<Card>
						<Card.Header>
							<i className="fab fa-linkedin fa-3x"></i>
						</Card.Header>
						<Card.Body>
							<Card.Title> Lorem, ipsum, dolor. </Card.Title>
							<Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing, elit. Esse, voluptas! </Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
		)
}

export default Benefits