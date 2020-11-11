import React from 'react'
import './SignUp'

export default class SignUp extends React.Component {
  render() {
    return (

      <div className="sign-up-page">

        <main role="main">
          <header role="banner">
            <h1>Trigger Point Troubleshooter</h1>
          </header>
          <section>
            <h3>Sign Up</h3>
            <form className='signup-form'>
              <div>
                <label htmlFor="first-name">First name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
              </div>
              <div>
                <label htmlFor="last-name">Last name</label>
                <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
              </div>
              <div>
                <label htmlFor="username">Email</label>
                <input type="text" name='username' id='username' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <button type='submit'>Register</button>
            </form>
            <p> Already Have An Account? <a href="log-in">Log In</a></p>
          </section>
        </main>
    
      </div>
    )
  }
}