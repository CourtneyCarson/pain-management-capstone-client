import React, { Component } from 'react';
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
      <main>
        <section className="login-component">

          <div className="log-in-page">
            <h1>Trigger Point Troubleshooter</h1>
            <h2 className='log-in-header'>Log In</h2>

            <div className="form-div">
              <form className='login-form' onSubmit={this.handleSubmit}>
                {errorMessage}

                <label className='login-label'>Email
              <input
                    className="login-input"
                    type="text"
                    name='loginUsername'
                    placeholder='user@email.com'
                    required
                  />
                </label>

                <label className='login-label'>Password
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
                <p className='demo'> Demo Account: </p>
                <p>user@email.com</p>
                <p>Password1</p>
              </div>

            </div>
          </div>
        </section >
      </main>
    );
  }
}

export default LogIn;