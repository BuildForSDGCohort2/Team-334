import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
  return (
  	<Nav>
	  	<NavLink className="nav-link" to="/about">About</NavLink>
	  	<NavLink to="/" className="nav-link">Covid</NavLink>
	  	<NavLink to="/" className="nav-link">Blog</NavLink>
  	</Nav>
  );
}

export default SignedOutLinks;
