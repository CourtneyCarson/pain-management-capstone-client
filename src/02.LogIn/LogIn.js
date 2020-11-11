import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AuthApiService from '../services/auth-api-service'
import './LogIn'

export default class LogIn extends React.Component {
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
            <p> No Account? <a href="sign-up">Sign Up</a></p>

          </div>
        </div>
      </section >
    )
  }
}