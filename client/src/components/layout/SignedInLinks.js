import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions.js'

const SignedInLinks = ({ signOut }) => {
  return (
  	<Nav className="ml-auto">
	  	<Link to="/booknow" className="nav-link">Book</Link>
	  	<NavDropdown title="Awareness" id="awareness">
	  		<Link to="/" className="dropdown-item">Articles</Link>
	  		<Link to="/" className="dropdown-item">Covid-19</Link>
	  	</NavDropdown>
	  	<NavDropdown title="Account" id="dropdown">
	  		<Link className="dropdown-item" to="/">Profile</Link>
	  		<Link className="dropdown-item" to="/">Complaints</Link>
	  		<Link className="dropdown-item" to="/providers">Provider</Link>
	  		<div className="dropdown-divider"></div>
	  		<button className="dropdown-item" onClick={signOut}>Logout</button>
	  	</NavDropdown>
  	</Nav>
  );
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
