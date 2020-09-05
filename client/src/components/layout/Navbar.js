import React from 'react';
import { Navbar } from 'react-bootstrap';
import SignedInLinks from './SignedInLinks.js'
import SignedOutLinks from './SignedOutLinks.js'
import { connect } from 'react-redux'
import logo from './assets/logo.png'

const App = ({ firebase }) => {
  return (
  	<Navbar style={{backgroundColor: "#4169e1"}} variant="dark" expand="lg">
  		<Navbar.Brand href="/">
  			<img src={logo} width="70" height="50" className="d-inline-block align-top" alt="vcare log" />
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
