import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
  	<Nav className="ml-auto">
  		<Link to="/" className="nav-link">Request</Link>
	  	<Link to="/" className="nav-link">About</Link>
	  	<Link to="/signup" className="nav-link">SignUp</Link>
  	</Nav>
  );
}

export default SignedInLinks;
