import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import LandingPage from './01.Landing/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}
export default App;
