import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions.js'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		this.props.signIn(this.state);
	}
	render() {
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/" />
		return (
		<Container className="my-5">
			<Form style={{maxWidth: "60%", marginLeft: "20%"}} onSubmit={this.handleSubmit}>
				<Form.Group controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" onChange={this.handleChange} />
				</Form.Group>
				<Button type="submit">Login</Button>
				<Button block className="my-4" type="submit"><i className="fab fa-facebook fa-md"></i> Signin with facebook</Button>
			</Form>
		</Container>
	)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (creds) => dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)