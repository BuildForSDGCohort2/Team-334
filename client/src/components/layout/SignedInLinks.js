import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions.js'

const SignedInLinks = ({ signOut }) => {
  return (
  	<Nav className="ml-auto">
	  	<Link to="/booknow" className="nav-link">Book</Link>
  		<NavDropdown title="Account" id="dropdown">
	  		<Link className="dropdown-item" to="/">Profile</Link>
	  		<Link className="dropdown-item" to="/">Complaints</Link>
	  		<div className="dropdown-divider"></div>
	  		<button className="dropdown-item" onClick={signOut}>Logout</button>
	  	</NavDropdown>
	  	<Link to="/" className="nav-link">Awareness</Link>
  	</Nav>
  );
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
