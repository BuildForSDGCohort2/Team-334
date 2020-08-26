import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
  return (
  	<Nav>
	  	<Link className="nav-link" to="/about">About</Link>
	  	<Link to="/" className="nav-link">Covid</Link>
	  	<Link to="/" className="nav-link">Blog</Link>
  	</Nav>
  );
}

export default SignedOutLinks;
