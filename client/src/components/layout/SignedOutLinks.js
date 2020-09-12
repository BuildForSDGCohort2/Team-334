import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap'

const SignedOutLinks = () => {
  return (
  	<Nav className="ml-auto">
	  	<Link className="nav-link" to="/demo">Demo</Link>
	  	<NavDropdown title="Awareness" id="awareness">
	  		<Link to="/" className="dropdown-item">Articles</Link>
	  		<Link to="/session" className="dropdown-item">Covid-19</Link>
	  	</NavDropdown>
  		<NavDropdown title="Account" id="account">
	  		<Link className="dropdown-item" to="/signin">Login</Link>
	  		<Link className="dropdown-item" to="/signup">Signup</Link>
	  		<div className="dropdown-divider"></div>
	  		<Link className="dropdown-item" to="/providers">Provider</Link>
	  	</NavDropdown>
  	</Nav>
  );
}

export default SignedOutLinks;
