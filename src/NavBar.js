import React from 'react'
import { Route, Link } from 'react-router-dom'


export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Route exact path={['/', '/log-out']} render={() => {
          return (
            <>
              <Link to='/log-in'>Log In</Link>
              <Link to='/sign-up'>Sign Up</Link>
            </>
          )
        }} />
        <Route exact path="/home" render={() => {
          return (
            <>
              <Link to='/about'>About</Link>
              <Link to='/how-to'>How To</Link>
              <Link to='/past-treatments'>Account</Link>
              <Link to='/log-out'>Log Out</Link>
            </>
          )
        }} />
        <Route exact path="/about" render={() => {
          return (
            <>
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/how-to'>How To</Link>
              <Link to='/past-treatments'>Account</Link>
              <Link to='/log-out'>Log Out</Link>
            </>
          )
        }} />

        <Route exact path="/how-to" render={() => {
          return (
            <>
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/past-treatments'>Account</Link>
              <Link to='/log-out'>Log Out</Link>
            </>
          )
        }} />

        <Route exact path="/trigger-point" render={() => {
          return (
            <>
              <Link to='/home'>Home</Link>
              <Link to='/past-treatments'>Account</Link>
              <Link to='/log-out'>Log Out</Link>
            </>
          )
        }} />

        <Route exact path="/past-treatments" render={() => {
          return (
            <>
              <Link to='/home'>Home</Link>
              <Link to='/log-out'>Log Out</Link>
            </>
          )
        }} />

      </nav>
    )
  }
}