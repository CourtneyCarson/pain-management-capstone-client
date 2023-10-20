import React from 'react';
import { Route, Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import './Navbar.css';

export default class NavBar extends React.Component {
  logOutClick = () => {
    //console.log('Logging out')
    TokenService.clearAuthToken();
    TokenService.getUserId = (id) => {
      //console.log(id)
    };

    window.location = '/';
  };

  render() {
    return (
      <header className="nav-bar">
        <nav className="nav-link">
          {/* <div className='nav-words'> */}
          <Route
            exact
            path={['/', '/log-out']}
            render={() => {
              return (
                <>
                  <Link to="/log-in">Log In</Link>
                  <Link to="/sign-up">Sign Up</Link>
                </>
              );
            }}
          />

          <Route
            exact
            path={'/log-in'}
            render={() => {
              return (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/sign-up">Sign Up</Link>
                </>
              );
            }}
          />

          <Route
            exact
            path={'/sign-up'}
            render={() => {
              return (
                <>
                  <Link to="/">Home</Link>
                </>
              );
            }}
          />

          <Route
            exact
            path="/home"
            render={() => {
              return (
                <>
                  <Link to="/about">About</Link>
                  <Link to="/how-to">How To</Link>
                  <Link to="/past-treatments">Account</Link>
                  {/* <Link to='/log-out'>Log Out</Link> */}
                  <Link to="/" onClick={this.logOutClick}>
                    Log Out
                  </Link>
                </>
              );
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              return (
                <>
                  <Link to="/home">Home</Link>
                  <Link to="/how-to">How To</Link>
                  <Link to="/past-treatments">Account</Link>
                  <Link to="/" onClick={this.logOutClick}>
                    Log Out
                  </Link>
                </>
              );
            }}
          />

          <Route
            exact
            path="/how-to"
            render={() => {
              return (
                <>
                  <Link to="/home">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/past-treatments">Account</Link>
                  <Link to="/" onClick={this.logOutClick}>
                    Log Out
                  </Link>
                </>
              );
            }}
          />

          <Route
            exact
            path="/trigger-point/:id"
            render={() => {
              return (
                <>
                  <Link to="/home">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/past-treatments">Account</Link>
                  <Link to="/" onClick={this.logOutClick}>
                    Log Out
                  </Link>
                </>
              );
            }}
          />

          <Route
            exact
            path="/past-treatments"
            render={() => {
              return (
                <>
                  <Link to="/home">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/how-to">How To</Link>
                  <Link to="/" onClick={this.logOutClick}>
                    Log Out
                  </Link>
                </>
              );
            }}
          />
          {/* </div> */}
        </nav>
      </header>
    );
  }
}
