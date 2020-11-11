import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AuthApiService from '../services/auth-api-service'
import './LogIn'


class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      params: {
        loginUsername: "",
        loginPassword: "",
      },
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    const { loginUsername, loginPassword } = event.target
    
   
}



  validateLoginUsername(inputEmail) {
    let outputEmail = inputEmail
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/
    if (!inputEmail.match(mailformat)) {
      outputEmail = ""
    }
    return outputEmail
  }

  validateLoginPassword(inputLoginPassword) {
    let outputloginPassword = inputLoginPassword
    let loginPasswordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/

    if (!inputLoginPassword.match(loginPasswordFormat)) {
      outputloginPassword = ""
    }
    return outputloginPassword
}





  render() {
    return (
      // <!-- Log In Page -->
      <section className="login-component">
        <div className="log-in-page">
          <h1 className='login-title'>Trigger Point Troubleshooter</h1>
          <h3 className="subtitle">Log In</h3>
          <div className="form-div">
            <form className='signup-form'>

              <label htmlFor="username">Email</label>
              <input
                className="login-input"
                type="text"
                name='username'
                placeholder='email@email.com'
                required
              />

              <label htmlFor="password">Password</label>
              <input
                className="login-input"
                type="password"
                name='password'
                placeholder='password'
                required
              />

              <button type='submit' className="login-button">
                Log In
                </button>
            </form>
            <div className="link-register-div">
              <p> No Account? </p>
              <Link to="sign-up" className="register-link">Sign Up</Link>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default LogIn