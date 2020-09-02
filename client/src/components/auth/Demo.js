import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { demoCall } from '../../store/actions/authActions.js'
import { Redirect } from 'react-router-dom'

class Demo extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		gender: '',
		checkbox: ''
	}
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.demoCall(this.state);
	}
	render() {
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/booknow" />
		return (
			<Container className="my-5">
				<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={this.handleSubmit}>
					<Form.Group controlId="firstname">
						<Form.Label>First name</Form.Label>
						<Form.Control type="text" placeholder="Enter First Name" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="lastname">
						<Form.Label>Last name</Form.Label>
						<Form.Control type="text" placeholder="Enter Last Name" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="gender">
						<Form.Label>Gender</Form.Label>
						<Form.Control as="select" onChange={this.handleChange}>
							<option>select</option>
							<option>male</option>
							<option>female</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="checkbox">
						<Form.Check type="checkbox" label="Sign me in to newsletter" onChange={this.handleChange} />
					</Form.Group>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		)
	}
}

const mapStateToProp = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = dispatch => {
	return {
		demoCall: creds => dispatch(demoCall(creds))
	}
}

export default connect(mapStateToProp, mapDispatchToProps)(Demo)