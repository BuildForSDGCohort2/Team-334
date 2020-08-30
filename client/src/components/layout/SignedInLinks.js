import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
  	<Nav className="ml-auto">
	  	<Link to="/booknow" className="nav-link">Book</Link>
  		<Link to="/" className="nav-link">Profile</Link>
	  	<Link to="/" className="nav-link">Awareness</Link>
  	</Nav>
  );
}

export default SignedInLinks;
