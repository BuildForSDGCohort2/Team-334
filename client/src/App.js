import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Demo from './components/auth/Demo'
import SignIn from './components/auth/SignIn'
import ProviderBoard from './administrations/dashboard/ProviderBoard'
import VideoChat from './administrations/video/VideoChat'
import VideoRoom from './components/user/video/VideoRoom'
import ProviderSignIn from './administrations/auth/ProviderSignIn'
import ProviderSignUp from './administrations/auth/ProviderSignUp'
import UserBoard from './components/user/UserBoard'
import Book from './components/user/Book'
import Builder from './administrations/dashboard/Builder'
import UpdateDetails from './administrations/dashboard/UpdateDetails'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/demo" component={Demo} />
          <Route path="/staff-signin" component={ProviderSignIn} />
          <Route path="/staff-signup" component={ProviderSignUp} />
          <Route path="/video-chat" component={VideoChat} />
          <Route path="/join/video-chat" component={VideoRoom} />
          <Route path="/staff" component={ProviderBoard} />
          <Route path="/user" component={UserBoard} />
          <Route path="/book/:id" component={Book} />
          <Route path="/builder/:email" component={Builder} />
          <Route path="/update" component={UpdateDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
