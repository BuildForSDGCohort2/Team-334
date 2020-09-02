import React from 'react';
import { Navbar } from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'
import { connect } from 'react-redux'

const App = ({ firebase }) => {
  return (
  	<Navbar style={{backgroundColor: "#4169e1"}} variant="dark" expand="lg">
  		<Navbar.Brand href="/">
  			VCare
  		</Navbar.Brand>
  		<Navbar.Toggle aria-controls="toggle" />
  		<Navbar.Collapse id="toggle">
  				{firebase.auth.uid ?  <SignedInLinks /> : <SignedOutLinks /> }
  		</Navbar.Collapse>
  	</Navbar>
  );
}

const mapStateToProps = state => {
  return {
    firebase: state.firebase
  }
}

export default connect(mapStateToProps)(App);
