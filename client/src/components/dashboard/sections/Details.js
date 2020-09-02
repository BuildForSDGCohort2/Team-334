import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Details = ({ auth }) => {

	return (
		<Jumbotron fluid  style={{backgroundColor: "#4169e1", fontSize: "18px"}} className="mb-0">
			<Container className="text-center text-light">
				<p>Telemedicine allows healthcare professionals to evaluate, diagnose and treat patients at a distance using telecommunications technology. This approach to healthcare has shown positive impacts and is becoming an increasing part of the world healthcare infrastructure. </p>
			{auth.uid ? null : <Link to="/demo" style={{maxWith: "80vw"}} className="btn btn-outline-light mt-5">Request a demo</Link>}
			</Container>
		</Jumbotron>
	)
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Details)