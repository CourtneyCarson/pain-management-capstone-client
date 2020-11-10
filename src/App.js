import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './01.Landing/LandingPage';
import LogIn from './02.LogIn/LogIn';
import SignUp from './03.SignUp/SignUp';
import HomePage from './04.Home/HomePage';
import AboutPage from './05.About/AboutPage';
import HowTo from './06.HowTo/HowTo';
import TriggerPoint from './07.TriggerPoint/TriggerPoint';
import PastTreatments from './08.PastTreatments/PastTreatments';
import NavBar from './09.NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <NavBar />
          <Route exact path='/' component={LandingPage} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/how-to" component={HowTo} />
          <Route path="/trigger-point" component={TriggerPoint} />
          <Route path="/past-treatments" component={PastTreatments} />
          <Route path="/log-out" component={LandingPage} />

        </Router>
      </div>
    );
  }
}
export default App;
