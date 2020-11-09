import React from 'react'
import './LogIn'

export default function LogIn(props) {
  return (
    // <!-- Log In Page -->
    <div className="log-in-page">
     
      <main role="main">
        <header role="banner">
          <h1>Trigger Point Troubleshooter</h1>
        </header>
        <h3>Log In</h3>
        <form className='signup-form'>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Log In</button>
        </form>
        <p> No Account? <a href="sign-up">Sign Up</a></p>
      </main>
   
    </div>
  )
}