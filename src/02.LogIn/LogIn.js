import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthApiService from '../services/auth-api-service';
import './LogIn.css';
import TokenService from '../services/token-service';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        loginUsername: "",
        loginPassword: "",
      },
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const { loginUsername, loginPassword } = event.target;

    AuthApiService.postLogin({
      email: loginUsername.value,
      password: loginPassword.value,

    })

      .then(response => {
        TokenService.saveAuthToken(response.authToken);
        TokenService.saveUserId(response.userId);
        loginUsername.value = "";
        loginPassword.value = "";
        window.location = '/home';
      })
      .catch(err => {
        console.log(err);
      });
  };

  validateloginUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = "";
    }
    return outputEmail;
  }

  validateLoginPassword(inputLoginPassword) {
    let outputLoginPassword = inputLoginPassword;
    let loginPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;

    if (!inputLoginPassword.match(loginPasswordFormat)) {
      outputLoginPassword = "";
    }
    return outputLoginPassword;
  }





  render() {
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>) : (false);

    return (
      <section className="login-component">
        <div className="log-in-page">
          <h1>Trigger Point Troubleshooter</h1>
          <h3>Log In</h3>
          <div className="form-div">
            <form className='login-form' onSubmit={this.handleSubmit}>
              {errorMessage}

              <label>Email
              <input
                  className="login-input"
                  type="text"
                  name='loginUsername'
                  placeholder='user@email.com'
                  required
                />
              </label>

              <label>Password
              <input
                  className='login-input'
                  type='password'
                  name='loginPassword'
                  placeholder='Password1'
                  required
                />
              </label>

              <button className='login-button' type='submit'>
                Log In
              </button>
            </form>

            <div className="link-register-div">
              <h4> Demo Account: </h4>
              <p>user@email.com</p>
              <p>Password1</p>
              {/* <Link to="sign-up" className="register-link">Sign Up</Link></p> */}
            </div>

          </div>
        </div>
      </section >
    );
  }
}

export default LogIn;