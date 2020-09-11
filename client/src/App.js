import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layout/Footer'
import Demo from './components/auth/Demo'
import SignIn from './components/auth/SignIn'
import Bookings from './components/auth/Bookings'
import AdminBoard from './administrations/dashboard/AdminBoard'
import VideoChat from './administrations/video/VideoChat'
import ProviderSignIn from './administrations/auth/ProviderSignIn'
import ProviderSignUp from './administrations/auth/ProviderSignUp'

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
          <Route path="/booknow" component={Bookings} />
          <Route path="/providers" component={AdminBoard} />
          <Route path="/session" component={VideoChat} />
          <Route path="/providersignin" component={ProviderSignIn} />
          <Route path="/providersignup" component={ProviderSignUp} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
