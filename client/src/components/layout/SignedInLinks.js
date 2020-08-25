import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
  	<Nav className="ml-auto">
  		<NavLink to="/" className="nav-link">Request</NavLink>
	  	<NavLink to="/" className="nav-link">About</NavLink>
	  	<NavLink to="/" className="nav-link">Covid</NavLink>
  	</Nav>
  );
}

export default SignedInLinks;
