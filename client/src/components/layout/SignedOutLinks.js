import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap'

const SignedOutLinks = () => {
  return (
  	<Nav className="ml-auto">
	  	<Link to="/" className="nav-link">Covid-19</Link>
	  	<Link to="/" className="nav-link">Awareness</Link>
  		<NavDropdown title="Account" id="dropdown">
	  		<Link className="dropdown-item" to="/signin">Login</Link>
	  		<Link className="dropdown-item" to="/signup">Signup</Link>
	  		<Link className="dropdown-item" to="/demo">Demo</Link>
	  	</NavDropdown>
  	</Nav>
  );
}

export default SignedOutLinks;
