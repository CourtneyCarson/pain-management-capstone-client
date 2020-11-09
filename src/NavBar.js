import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export default class NavBar extends React.Component {
  render() {
    return (
      <>
        <Link to='/'>LandingPage</Link>
        <Link to='/log-in'>Log In</Link>
        <Link to='/sign-up'>Sign Up</Link>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/how-to'>Treatment</Link>
        <Link to='/trigger-point'>Trigger Point</Link>
        <Link to='/past-treatments'>Past Treatments</Link>
      </>
    )
  }
}