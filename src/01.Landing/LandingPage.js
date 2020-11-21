import React from 'react';
import './LandingPage.css';

export default function LandingPage(props) {
  return (

    <div className='landing-page'>
      <div className='landing-page-header'>
        <h2>Get To The Root Of Your Pain</h2>
        <img src="https://live.staticflickr.com/65535/50607295132_069ed53912_w.jpg" alt="SubOccipital" />
      </div>
      <div className='landing-page-content'>
        <p> This is a troubleshooting application for you to seek out a solution for your pain.</p>
        <p> Log in to learn more about Trigger Points and how to treat them.
          </p>
      </div>

    </div>
  )
}
