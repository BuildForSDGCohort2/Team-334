import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js'
import Load from './components/layout/Loading.js'
import Dashboard from './components/dashboard/Dashboard.js'
import Footer from './components/layout/Footer.js'

const App = () => {
  return (
  	<BrowserRouter>
  		<div className="App">
  		  <Navbar />
  		  <Switch>
	        <Route exact path="/" component={Dashboard} />
  		  	<Route path="/about" component={Load} />
  		  </Switch>
        <Footer />
	    </div>
  	</BrowserRouter>
  );
}

export default App;
