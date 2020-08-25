import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js'
import Load from './components/layout/Loading.js'

const App = () => {
  return (
  	<BrowserRouter>
  		<div className="App">
	      <Navbar />
	      <Route path="/about" component={Load} />
	    </div>
  	</BrowserRouter>
  );
}

export default App;
