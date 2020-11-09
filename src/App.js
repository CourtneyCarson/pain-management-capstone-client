import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import LandingPage from './01.Landing/LandingPage';
import LogIn from './02.LogIn/LogIn';
import HowTo from './06.HowTo/HowTo';
import SignUp from './03.SignUp/SignUp';
import HomePage from './04.Home/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to='/'>LandingPage</Link>
          <Link to='/log-in'>Log In</Link>
          <Link to='/home'>Home</Link>
          <Link to='/how-to'>Treatment</Link>
          <Link to='/sign-up'>Sign Up</Link>
          <Route path='/' component={LandingPage} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/home" component={HomePage} />
          <Route path="/how-to" component={HowTo} />
          <Route path="/sign-up" component={SignUp} />
        </Router>
  
      </div>
    );
  }
}
export default App;
