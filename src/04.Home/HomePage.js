import React from 'react'
import {Link } from 'react-router-dom'
import './HomePage'

export default function HomePage(props) {
  return (


    <div className="home-page">
  
      <main role="main">
        <section>
          <header>
            <h3>Get to the root of your pain</h3>
            <p>*placeholder for image of trigger point on body*</p>
          </header>
        </section>
        <section>
          <h5>Select The Area You Are Feeling Pain</h5>
          {/* <!-- images of areas of pain - as buttons --> */}
          <Link to="/trigger-point/1">
            <img src="https://loremflickr.com/750/300/landscape?random=1"/>
          </Link>

          <Link to="/trigger-point/2">
            <img src="https://loremflickr.com/750/300/landscape?random=2"/>
          </Link>

          <Link to="/trigger-point/3">
            <img src="https://loremflickr.com/750/300/landscape?random=3"/>
          </Link>          

          
          <Link to="/trigger-point/4">
            <img src="https://loremflickr.com/750/300/landscape?random=4"/>
          </Link>
        
        </section>
      </main>
    
    </div>
  )
}