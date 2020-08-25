import React from 'react';
import { Navbar } from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'

const App = () => {
  return (
  	<Navbar bg="dark" variant="dark" expand="lg">
  		<Navbar.Brand href="#home">
  			eHealthMe
  		</Navbar.Brand>
  		<Navbar.Toggle aria-controls="toggle" />
  		<Navbar.Collapse id="toggle">
  				<SignedInLinks />
  				<SignedOutLinks />
  		</Navbar.Collapse>
  	</Navbar>
  );
}

export default App;
