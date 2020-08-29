import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js'
import SignUp from './components/auth/SignUp.js'
import Dashboard from './components/dashboard/Dashboard.js'
import Footer from './components/layout/Footer.js'
import Demo from './components/auth/Demo.js'
import SignIn from './components/auth/SignIn.js'

const App = () => {
  return (
  	<BrowserRouter>
  		<div className="App">
  		  <Navbar />
  		  <Switch>
	        <Route exact path="/" component={Dashboard} />
  		  	<Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/demo" component={Demo} />
  		  </Switch>
        <Footer />
	    </div>
  	</BrowserRouter>
  );
}

export default App;
