import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions.js'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {

	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		agecategory: '',
		checkbox: ''
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.signUp(this.state);
	}
	render() {
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/" />
		return (
			<Container>
				<Form className="my-5" style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={this.handleSubmit} >
					<Form.Group>
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" id="firstname" placeholder="Enter First name" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" id="lastname" placeholder="Enter Last name" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" id="password" placeholder="Enter password" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="agecategory" onChange={this.handleChange}>
						<Form.Label>Age Category</Form.Label>
						<Form.Control as="select">
							<option>18 and above</option>
							<option>under 18</option>
						</Form.Control>
					</Form.Group>
					{this.state.agecategory === 'under 18' ? (
						<Form.Group>
							<Form.Label>Parent's Email</Form.Label>
							<Form.Control type="email" id="email" placeholder="Enter Guardian's email" onChange={this.handleChange} />
						</Form.Group>
					) : (null)}
					<Form.Group controlId="checkbox">
						<Form.Check type="checkbox" label="Sign me in to newsletter" onChange={this.handleChange} />
					</Form.Group>
					<Button type="submit">Submit</Button>
					<Button block className="my-4"><i className="fab fa-facebook"></i> Signup with facebook</Button>
				</Form>
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: creds => dispatch(signUp(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
